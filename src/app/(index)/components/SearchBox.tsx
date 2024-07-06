"use client";

import type {FormEvent} from "react";

import {useRouter, useSearchParams} from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos el valor del input
    const query = event.currentTarget.query.value;

    // Redireccionamos al index con una query
    router.push(`/?q=${query}`);
  }

  return (
    <form className="mb-4 inline-flex gap-2" onSubmit={handleSubmit}>
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input
        className="rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        defaultValue={searchParams.get("q") || ""}
        name="query"
        placeholder="Search..."
      />
      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:ring focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
