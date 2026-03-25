import type { SortOption } from '../../types/product';

export interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}
