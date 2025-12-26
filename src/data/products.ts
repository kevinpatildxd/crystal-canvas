import { Product, ProductCategory } from "@/types/product";

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Jars",
    slug: "jars",
    icon: "🫙",
    description: "Premium quality jars in various sizes for packaging",
  },
  {
    id: "2",
    name: "Cans",
    slug: "cans",
    icon: "🛢️",
    description: "Durable cans for oils, lubricants and industrial use",
  },
  {
    id: "3",
    name: "Cleaner Bottles",
    slug: "cleaner-bottles",
    icon: "🧴",
    description: "Specialized bottles for cleaning solutions",
  },
  {
    id: "4",
    name: "Detergent Bottles",
    slug: "detergent-bottles",
    icon: "🧹",
    description: "Bottles designed for detergent and liquid soap",
  },
  {
    id: "5",
    name: "Square Bottles",
    slug: "square-bottles",
    icon: "📦",
    description: "Space-efficient square bottles for various applications",
  },
  {
    id: "6",
    name: "Toilet Cleaner Bottles",
    slug: "toilet-cleaner-bottles",
    icon: "🚽",
    description: "Ergonomic bottles for toilet cleaning products",
  },
  {
    id: "7",
    name: "Bottles",
    slug: "bottles",
    icon: "🍶",
    description: "General purpose bottles in multiple sizes",
  },
];

export const products: Product[] = [
  // Jars
  { id: "p1", name: "50gm Jar", category: "jars", image: "/50gm_jar1_inspyrenet.png", capacity: "50gm" },
  { id: "p2", name: "50ml Jar", category: "jars", image: "/50ml_jar_inspyrenet.png", capacity: "50ml" },
  { id: "p3", name: "100ml Jar", category: "jars", image: "/100ml_jar_inspyrenet.png", capacity: "100ml" },
  { id: "p4", name: "250ml Jar", category: "jars", image: "/250ml_jar_inspyrenet.png", capacity: "250ml" },
  { id: "p5", name: "500ml Jar", category: "jars", image: "/500ml_jar_inspyrenet.png", capacity: "500ml" },
  { id: "p6", name: "1kg Jar", category: "jars", image: "/1kg_jaar_inspyrenet.png", capacity: "1kg" },

  // Cans
  { id: "p7", name: "1 Litre Can", category: "cans", image: "/1_litre_can_inspyrenet.png", capacity: "1L" },
  { id: "p8", name: "2 Litre Can", category: "cans", image: "/2_litre_can_inspyrenet.png", capacity: "2L" },
  { id: "p9", name: "3 Litre Can", category: "cans", image: "/3_litre_can_1_inspyrenet.png", capacity: "3L" },
  { id: "p10", name: "4 Litre Can", category: "cans", image: "/4_litre_can_inspyrenet.png", capacity: "4L" },
  { id: "p11", name: "5 Litre Can", category: "cans", image: "/5_litre_can1_inspyrenet.png", capacity: "5L" },
  { id: "p12", name: "5 Litre Round Can", category: "cans", image: "/5_litre_round_can_inspyrenet.png", capacity: "5L" },
  { id: "p13", name: "5 Litre Fortune Can", category: "cans", image: "/5_litre_fortune_can_inspyrenet.png", capacity: "5L" },
  { id: "p14", name: "5 Litre Mango Can", category: "cans", image: "/5_litre_mango_can_inspyrenet.png", capacity: "5L" },
  { id: "p15", name: "5 Litre Ankur Can", category: "cans", image: "/5_litre_ankur_inspyrenet.png", capacity: "5L" },

  // Cleaner Bottles
  { id: "p16", name: "1 Litre Cleaner Bottle", category: "cleaner-bottles", image: "/1_litre_cleaner_bottle_inspyrenet.png", capacity: "1L" },
  { id: "p17", name: "500ml Bathroom Cleaner", category: "cleaner-bottles", image: "/500ml_bathroom_cleaner_inspyrenet.png", capacity: "500ml" },
  { id: "p18", name: "500ml Floor Cleaner", category: "cleaner-bottles", image: "/500ml_floor _cleaner_inspyrenet.png", capacity: "500ml" },

  // Detergent Bottles
  { id: "p19", name: "1 Litre Detergent Bottle", category: "detergent-bottles", image: "/1_litre_detergant_liquid_bottle_inspyrenet.png", capacity: "1L" },
  { id: "p20", name: "3 Litre Detergent Bottle", category: "detergent-bottles", image: "/3_litre_detergant_liquid_bottle_inspyrenet.png", capacity: "3L" },

  // Square Bottles
  { id: "p21", name: "1 Litre Square Bottle", category: "square-bottles", image: "/1_litre_square_bottle_inspyrenet.png", capacity: "1L" },

  // Toilet Cleaner Bottles
  { id: "p22", name: "Toilet Cleaner Bottles Set", category: "toilet-cleaner-bottles", image: "/250ml_Toilet cleaner bottle_500ml_Toilet_cleaner_bottle _1litter_Toi_birefne.png", capacity: "250ml - 1L" },

  // General Bottles
  { id: "p23", name: "Multi-Size Bottles Set", category: "bottles", image: "/50ml bottle _100ml bottle_200ml_bottle _300ml bottle_500ml bottle_inspyrenet.png", capacity: "50ml - 500ml" },
];
