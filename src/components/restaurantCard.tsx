"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantCard({
  restaurant,
  toggleFavorite,
}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  };
  toggleFavorite: (id: string) => void;
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem("favorites") || "[]");

    setIsFavourite(favorites.includes(restaurant.id));
  }, [restaurant.id]);

  const handleFavoriteClick = () => {
    toggleFavorite(restaurant.id);
    setIsFavourite(!isFavourite);
  };

  return (
    <article
      key={restaurant.id}
      className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
    >
      <Link href={`/${restaurant.id}`}>
        <Image
          alt={restaurant.name}
          className="mb-3 h-[300px] w-full rounded-t-lg object-cover"
          height={300}
          src={restaurant.image.startsWith("http") ? restaurant.image : "/placeholder-image.png"}
          width={480}
        />
        <div className="p-6">
          <h2 className="inline-flex gap-2 text-lg font-bold text-gray-800 dark:text-gray-200">
            <span>{restaurant.name}</span>
            <small className="inline-flex gap-1 text-yellow-500">
              <span>⭐</span>
              <span>{restaurant.score}</span>
              <span className="font-normal opacity-75">({restaurant.ratings})</span>
            </small>
            <button
              className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleFavoriteClick();
              }}
            >
              ♥
            </button>
          </h2>
          <p className="text-gray-700 opacity-90 dark:text-gray-300">{restaurant.description}</p>
        </div>
      </Link>
    </article>
  );
}
