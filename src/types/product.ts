export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  capacity?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}
