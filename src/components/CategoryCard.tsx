import { Link } from "react-router-dom";
import { ProductCategory } from "@/types/product";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  category: ProductCategory;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group glass-hover rounded-3xl p-6 flex flex-col justify-between min-h-[200px] opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <div>
        <span className="text-4xl mb-4 block">{category.icon}</span>
        <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {category.description}
        </p>
      </div>
      
      <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
        <span className="text-sm font-medium">Explore</span>
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default CategoryCard;
