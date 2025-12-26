import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { productCategories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (slug: string) => {
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium plastic packaging solutions designed
            for various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="glass rounded-2xl p-4 mb-12 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${activeCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Info */}
        {activeCategory !== "all" && (
          <div className="glass rounded-2xl p-6 mb-8">
            {productCategories
              .filter((c) => c.slug === activeCategory)
              .map((category) => (
                <div key={category.id} className="flex items-center gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Custom Packaging?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We offer custom design and manufacturing services tailored to your specific requirements.
          </p>
          <a
            href="/contact"
            className="btn-liquid inline-flex"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </main>
  );
};

export default Products;
