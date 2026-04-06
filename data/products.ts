export type ProductCategory =
  | "Vestidos"
  | "Blazers"
  | "Conjuntos"
  | "Camisas"
  | "Pantalones"
  | "Faldas"
  | "Abrigos"
  | "Accesorios";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  image: string;
  shortDescription?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "vestido-noir-satin",
    name: "Vestido Noir Satin",
    category: "Vestidos",
    price: "$89.900",
    image: "/assets/catalog/dress-noir.svg",
    shortDescription: "Corte midi fluido con caída satinada y escote minimalista.",
    featured: true
  },
  {
    id: "blazer-rose-tailored",
    name: "Blazer Rose Tailored",
    category: "Blazers",
    price: "$109.900",
    image: "/assets/hero/blazer-rose.svg",
    shortDescription: "Sastrería estructurada en tono rosa empolvado para looks de día y noche."
  },
  {
    id: "conjunto-eclipse",
    name: "Conjunto Eclipse",
    category: "Conjuntos",
    price: "$129.900",
    image: "/assets/hero/set-eclipse.svg",
    shortDescription: "Set coordinado de top y pantalón con silueta contemporánea.",
    featured: true
  },
  {
    id: "camisa-aura-silk",
    name: "Camisa Aura Silk",
    category: "Camisas",
    price: "$72.900",
    image: "/assets/hero/dress-velvet.svg",
    shortDescription: "Camisa de tacto sedoso con manga amplia y acabado brillante."
  },
  {
    id: "pantalon-metro-wide",
    name: "Pantalón Metro Wide",
    category: "Pantalones",
    price: "$84.900",
    image: "/assets/catalog/blazer-midnight.svg",
    shortDescription: "Tiro alto y pierna ancha para una silueta estilizada y cómoda."
  },
  {
    id: "falda-lumi-pleats",
    name: "Falda Lumi Pleats",
    category: "Faldas",
    price: "$69.900",
    image: "/assets/catalog/dress-noir.svg",
    shortDescription: "Plisado suave con movimiento ligero para outfits versátiles."
  },
  {
    id: "abrigo-celeste-wool",
    name: "Abrigo Celeste Wool",
    category: "Abrigos",
    price: "$149.900",
    image: "/assets/hero/blazer-rose.svg",
    shortDescription: "Abrigo largo en mezcla de lana con líneas limpias y elegantes.",
    featured: true
  },
  {
    id: "vestido-velvet-glow",
    name: "Vestido Velvet Glow",
    category: "Vestidos",
    price: "$94.900",
    image: "/assets/hero/dress-velvet.svg",
    shortDescription: "Textura aterciopelada y cintura marcada para un look sofisticado."
  },
  {
    id: "blazer-midnight",
    name: "Blazer Midnight",
    category: "Blazers",
    price: "$112.900",
    image: "/assets/catalog/blazer-midnight.svg",
    shortDescription: "Blazer oscuro de corte recto con acabado premium y forro suave."
  },
  {
    id: "bolso-luna-pink",
    name: "Bolso Luna Pink",
    category: "Accesorios",
    price: "$59.900",
    image: "/assets/catalog/bag-luna.svg",
    shortDescription: "Bolso compacto de asa corta con herrajes dorados y diseño urbano."
  }
];
