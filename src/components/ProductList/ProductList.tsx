import { PackageX } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";
import type { ProductListProps } from "./ProductList.types";

export function ProductList({ products, onProductClick }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white rounded-2xl border border-gray-100 border-dashed">
        <PackageX className="w-16 h-16 mb-4 text-gray-300" />
        <h3 className="text-xl font-medium text-gray-900 mb-1">
          No products found
        </h3>
        <p className="text-sm">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  );
}
