"use client";
import {useEffect, useState} from "react";

import RestaurantCard from "@/components/restaurantCard";
import api from "@/api";

import SearchBox from "./components/SearchBox";

export default function HomePage({searchParams}: {searchParams: {q: string}}) {
  const query = searchParams.q || "";
  const [restaurants, setRestaurants] = useState([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await api.search(query);

      setRestaurants(results);
    };

    fetchRestaurants();
  }, [query]);

  useEffect(() => {
    const savedFavorites = JSON.parse(window.localStorage.getItem("favorites") || "[]");

    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (id: string) => {
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((fav) => fav !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    window.localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    const isAFavorite = favorites.includes(a.id);
    const isBFavorite = favorites.includes(b.id);

    if (isAFavorite && !isBFavorite) return -1;
    if (!isAFavorite && isBFavorite) return 1;

    return 0;
  });

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 bg-gray-100 p-6 dark:bg-gray-900 md:grid-cols-2 lg:grid-cols-3">
        {sortedRestaurants.length > 0 ? (
          sortedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            No restaurants found for the query: {query}
          </p>
        )}
      </section>
    </section>
  );
}
