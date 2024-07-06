interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Golden Spoon",
    description:
      "A fine dining experience with a menu that changes daily based on the freshest ingredients available.",
    address: "123 Main St. Anytown USA",
    score: 4.5,
    ratings: 100,
    image: "https://img.freepik.com/foto-gratis/diseno-interiores-restaurantes_1409-7442.jpg",
  },
  {
    id: "2",
    name: "La Piazza",
    description: "Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.",
    address: "456 Oak Ave. Anytown USA",
    score: 4.2,
    ratings: 80,
    image:
      "https://img.freepik.com/foto-gratis/restaurante-paredes-ladrillo-rojo-mesas-madera-tuberias-techo_140725-8504.jpg",
  },
  {
    id: "3",
    name: "The Sizzling Skillet",
    description:
      "A family-friendly restaurant with a wide variety of dishes, including vegetarian and gluten-free options.",
    address: "789 Elm St. Anytown USA",
    score: 4.8,
    ratings: 120,
    image:
      "https://img.freepik.com/fotos-premium/mesas-sillas-restaurante-vista-ciudad-ai-generativo_974533-5829.jpg",
  },
  {
    id: "4",
    name: "The Hungry Bear",
    description: "A rustic cabin-style restaurant serving hearty portions of comfort food.",
    address: "101 Forest Rd. Anytown USA",
    score: 4.0,
    ratings: 60,
    image: "https://img.freepik.com/foto-gratis/interior-restaurante_1127-3392.jpg",
  },
  {
    id: "5",
    name: "The Spice Route",
    description: "A fusion restaurant that combines the flavors of India, Thailand, and China.",
    address: "246 Main St. Anytown USA",
    score: 4.6,
    ratings: 90,
    image:
      "https://img.freepik.com/fotos-premium/mesas-vacias-street-cafe-manana-estambul_93675-124348.jpg",
  },
  {
    id: "6",
    name: "The Catch of the Day",
    description: "A seafood restaurant with a focus on locally-sourced, sustainable ingredients.",
    address: "369 Beach Blvd. Anytown USA",
    score: 4.3,
    ratings: 70,
    image:
      "https://img.freepik.com/fotos-premium/acogedor-restaurante-gente-camarero_175935-230.jpg",
  },
  {
    id: "7",
    name: "The Garden Cafe",
    description: "A vegetarian restaurant with a beautiful outdoor garden seating area.",
    address: "753 Maple St. Anytown USA",
    score: 4.9,
    ratings: 150,
    image: "https://img.freepik.com/fotos-premium/vista-interior-restaurante-hotel_1417-14174.jpg",
  },
  {
    id: "8",
    name: "The Burger Joint",
    description: "A classic American diner with a wide variety of burgers, fries, and milkshakes.",
    address: "852 Oak Ave. Anytown USA",
    score: 3.9,
    ratings: 50,
    image: "https://img.freepik.com/fotos-premium/diseno-interior-barra_863013-75919.jpg",
  },
  {
    id: "9",
    name: "The Cozy Corner",
    description:
      "A small cafe with a warm and inviting atmosphere, serving breakfast and lunch dishes.",
    address: "963 Main St. Anytown USA",
    score: 4.7,
    ratings: 110,
    image:
      "https://img.freepik.com/fotos-premium/arquitectura-salon-interior-relajacion-entretenimiento_482257-9579.jpg",
  },
  {
    id: "10",
    name: "The Steakhouse",
    description: "A high-end restaurant specializing in premium cuts of beef and fine wines.",
    address: "1479 Elm St. Anytown USA",
    score: 4.1,
    ratings: 75,
    image:
      "https://img.freepik.com/foto-gratis/restaurante-al-aire-libre-sillas-mesas-madera_181624-57563.jpg",
  },
  {
    id: "11",
    name: "The Taco Truck",
    description: "A casual Mexican restaurant serving authentic street tacos.",
    address: "753 Main St. Anytown USA",
    score: 4.4,
    ratings: 65,
    image:
      "https://img.freepik.com/fotos-premium/restaurante-estilo-arquitectonico-clasico-chino-casa-te_1417-8440.jpg",
  },
  {
    id: "12",
    name: "The Ice Cream Parlor",
    description: "A family-friendly restaurant with a wide variety of ice cream flavors.",
    address: "852 Oak Ave. Anytown USA",
    score: 4.9,
    ratings: 150,
    image: "https://img.freepik.com/fotos-premium/restaurante-interior-plantas_863013-36392.jpg",
  },
];

const api = {
  list: async (): Promise<Restaurant[]> => {
    return restaurants;
  },
  fetch: async (id: string): Promise<Restaurant | undefined> => {
    return restaurants.find((restaurant) => restaurant.id === id);
  },
  search: async (query: string): Promise<Restaurant[]> => {
    return restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()),
    );
  },
};

export default api;
