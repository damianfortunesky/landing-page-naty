export type ProductCategory = "Vestidos" | "Blazers" | "Accesorios" | "Conjuntos";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: ProductCategory;
  image: string;
}

export const products: Product[] = [
  {
    id: "dress-noir",
    name: "Vestido Noir Satin",
    price: "$89.900",
    category: "Vestidos",
    image: "/products/dress-noir.svg"
  },
  {
    id: "blazer-rose",
    name: "Blazer Rose Tailored",
    price: "$109.900",
    category: "Blazers",
    image: "/products/blazer-rose.svg"
  },
  {
    id: "set-eclipse",
    name: "Conjunto Eclipse",
    price: "$129.900",
    category: "Conjuntos",
    image: "/products/set-eclipse.svg"
  },
  {
    id: "bag-luna",
    name: "Bolso Luna Pink",
    price: "$59.900",
    category: "Accesorios",
    image: "/products/bag-luna.svg"
  },
  {
    id: "dress-velvet",
    name: "Vestido Velvet Glow",
    price: "$94.900",
    category: "Vestidos",
    image: "/products/dress-velvet.svg"
  },
  {
    id: "blazer-midnight",
    name: "Blazer Midnight",
    price: "$112.900",
    category: "Blazers",
    image: "/products/blazer-midnight.svg"
  }
];
