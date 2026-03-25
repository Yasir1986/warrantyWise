import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterBar } from "./FilterBar";

describe("FilterBar", () => {
  const categories = ["Electronics", "Clothing"];

  it("renders categories and all button", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory="All"
        onCategoryChange={() => {}}
        sortOption="price-asc"
        onSortChange={() => {}}
      />,
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Clothing")).toBeInTheDocument();
  });

  it("calls onCategoryChange when a category is clicked", () => {
    const handleCategoryChange = vi.fn();
    render(
      <FilterBar
        categories={categories}
        selectedCategory="All"
        onCategoryChange={handleCategoryChange}
        sortOption="price-asc"
        onSortChange={() => {}}
      />,
    );

    fireEvent.click(screen.getByText("Electronics"));
    expect(handleCategoryChange).toHaveBeenCalledWith("Electronics");
  });

  it("calls onSortChange when sort option is changed", () => {
    const handleSortChange = vi.fn();
    render(
      <FilterBar
        categories={categories}
        selectedCategory="All"
        onCategoryChange={() => {}}
        sortOption="price-asc"
        onSortChange={handleSortChange}
      />,
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "price-desc" } });
    expect(handleSortChange).toHaveBeenCalledWith("price-desc");
  });
});
