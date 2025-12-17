import { Product, ProductCategory } from "@/types/product";

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "HDPE Bottles",
    slug: "hdpe-bottles",
    icon: "🧴",
    description: "High-quality HDPE bottles for various applications",
  },
  {
    id: "2",
    name: "HDPE Jerry Cans",
    slug: "hdpe-jerry-cans",
    icon: "🫙",
    description: "Durable jerry cans for industrial use",
  },
  {
    id: "3",
    name: "Packaging Jars",
    slug: "packaging-jars",
    icon: "🏺",
    description: "Premium packaging jars for food & cosmetics",
  },
  {
    id: "4",
    name: "Toilet Cleaner Bottles",
    slug: "toilet-cleaner-bottles",
    icon: "🧹",
    description: "Specialized bottles for cleaning products",
  },
  {
    id: "5",
    name: "Floor Cleaner Bottles",
    slug: "floor-cleaner-bottles",
    icon: "🧽",
    description: "Ergonomic bottles for floor cleaning solutions",
  },
  {
    id: "6",
    name: "Glass-Look Bottles",
    slug: "glass-bottles",
    icon: "✨",
    description: "PET bottles with glass-like appearance",
  },
  {
    id: "7",
    name: "HDPE Jars",
    slug: "hdpe-jars",
    icon: "🫠",
    description: "Wide-mouth jars for multiple uses",
  },
  {
    id: "8",
    name: "Oil Cans",
    slug: "oil-cans",
    icon: "🛢️",
    description: "Heavy-duty cans for oil & lubricants",
  },
];

export const products: Product[] = [
  // HDPE Bottles
  { id: "p1", name: "100ml HDPE Bottle", category: "hdpe-bottles", image: "/product-1.png", capacity: "100ml" },
  { id: "p2", name: "250ml HDPE Bottle", category: "hdpe-bottles", image: "/product-2.png", capacity: "250ml" },
  { id: "p3", name: "500ml HDPE Bottle", category: "hdpe-bottles", image: "/product-3.png", capacity: "500ml" },
  { id: "p4", name: "1L HDPE Bottle", category: "hdpe-bottles", image: "/product-4.png", capacity: "1L" },
  
  // HDPE Jerry Cans
  { id: "p5", name: "5L Jerry Can", category: "hdpe-jerry-cans", image: "/product-5.png", capacity: "5L" },
  { id: "p6", name: "10L Jerry Can", category: "hdpe-jerry-cans", image: "/product-1.png", capacity: "10L" },
  { id: "p7", name: "20L Jerry Can", category: "hdpe-jerry-cans", image: "/product-2.png", capacity: "20L" },
  
  // Packaging Jars
  { id: "p8", name: "100ml Jar", category: "packaging-jars", image: "/product-3.png", capacity: "100ml" },
  { id: "p9", name: "250ml Jar", category: "packaging-jars", image: "/product-4.png", capacity: "250ml" },
  { id: "p10", name: "500ml Jar", category: "packaging-jars", image: "/product-5.png", capacity: "500ml" },
  
  // Toilet Cleaner Bottles
  { id: "p11", name: "500ml Toilet Cleaner", category: "toilet-cleaner-bottles", image: "/product-1.png", capacity: "500ml" },
  { id: "p12", name: "1L Toilet Cleaner", category: "toilet-cleaner-bottles", image: "/product-2.png", capacity: "1L" },
  
  // Floor Cleaner Bottles
  { id: "p13", name: "500ml Floor Cleaner", category: "floor-cleaner-bottles", image: "/product-3.png", capacity: "500ml" },
  { id: "p14", name: "1L Floor Cleaner", category: "floor-cleaner-bottles", image: "/product-4.png", capacity: "1L" },
  
  // Glass-Look Bottles
  { id: "p15", name: "200ml Glass-Look", category: "glass-bottles", image: "/product-5.png", capacity: "200ml" },
  { id: "p16", name: "500ml Glass-Look", category: "glass-bottles", image: "/product-1.png", capacity: "500ml" },
  
  // HDPE Jars
  { id: "p17", name: "250ml HDPE Jar", category: "hdpe-jars", image: "/product-2.png", capacity: "250ml" },
  { id: "p18", name: "500ml HDPE Jar", category: "hdpe-jars", image: "/product-3.png", capacity: "500ml" },
  
  // Oil Cans
  { id: "p19", name: "1L Oil Can", category: "oil-cans", image: "/product-4.png", capacity: "1L" },
  { id: "p20", name: "5L Oil Can", category: "oil-cans", image: "/product-5.png", capacity: "5L" },
];
