import Image from "next/image";
import Link from "next/link";

import api from "@/api";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  if (!restaurant) {
    return {
      title: "Restaurant not found - Restaurancy",
      description: "Restaurant not found",
    };
  }

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  if (!restaurant) {
    return (
      <div className="text-center text-xl text-gray-800 dark:text-gray-200">
        Restaurant not found
      </div>
    );
  }

  return (
    <article
      key={restaurant.id}
      className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform dark:bg-gray-800"
    >
      <div className="relative h-72 w-full">
        <Image
          alt={restaurant.name}
          className="object-cover"
          layout="fill"
          src={restaurant.image}
        />
      </div>
      <div className="p-6">
        <h2 className="inline-flex gap-2 text-lg font-bold text-gray-800 dark:text-gray-200">
          <span>{restaurant.name}</span>
          <small className="inline-flex gap-1 text-yellow-500">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">({restaurant.ratings})</span>
          </small>
        </h2>
        <p className="text-gray-700 opacity-90 dark:text-gray-300">{restaurant.description}</p>
        <Link
          className="mt-4 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          href="/"
        >
          Click here to go back
        </Link>
      </div>
    </article>
  );
}
