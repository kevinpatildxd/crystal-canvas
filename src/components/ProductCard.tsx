import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group glass-hover rounded-3xl p-4 cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-background mb-4">
        <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        {product.capacity && (
          <span className="absolute bottom-3 right-3 px-3 py-1 text-xs font-medium rounded-full glass text-primary">
            {product.capacity}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
