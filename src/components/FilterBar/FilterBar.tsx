import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import type { FilterBarProps } from "./FilterBar.types";
import type { SortOption } from "../../types/product";

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <SlidersHorizontal className="w-5 h-5 text-gray-400 shrink-0" />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange("All")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-indigo-50 text-indigo-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        <ArrowUpDown className="w-5 h-5 text-gray-400 shrink-0" />
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="block w-full pl-3 pr-10 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer appearance-none"
        >
          <option value="rating-desc">Highest Rated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}
