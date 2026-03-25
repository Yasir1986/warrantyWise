import { useState } from "react";
import { useProducts } from "./hooks/useProduct";
import { categories, mockProducts } from "./data/mockProduct";
import { ProductList } from "./components/ProductList/ProductList";
import { ShoppingBag } from "lucide-react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { ProductModal } from "./components/ProductModal/ProductModal";
import type { Product } from "./types/product";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const {
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
  } = useProducts({ initialProducts: mockProducts });

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">
              WarrantyWise
            </h1>
          </div>
          <div className="flex-1 max-w-md flex justify-end">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Our Products
          </h2>
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>

        <div className="mb-4 text-sm text-gray-500 font-medium">
          Showing {products.length}{" "}
          {products.length === 1 ? "product" : "products"}
        </div>

        <ProductList products={products} onProductClick={setSelectedProduct} />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
