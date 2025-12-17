
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group glass-hover rounded-3xl p-4 cursor-pointer flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-50 mb-4">
        <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
        {product.capacity && (
          <span className="absolute bottom-3 right-3 px-3 py-1 text-xs font-medium rounded-full glass text-primary">
            {product.capacity}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-1 flex-grow">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}
      </div>

      {/* Enquiry Button */}
      <div className="mt-4 pt-2">
        <a
          href={`https://wa.me/916354864920?text=${encodeURIComponent(
            `Hi, I am interested in this product: ${product.name}${product.capacity ? ` (${product.capacity})` : ""
            }`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-industrial text-sm py-2 px-4 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          Enquiry
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
