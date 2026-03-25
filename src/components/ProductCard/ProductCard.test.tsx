import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Product } from "../../types/product";
import { ProductList } from "../ProductList/ProductList";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Desc 1",
    price: 10,
    category: "Cat 1",
    imageUrl: "",
    rating: 4,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Desc 2",
    price: 20,
    category: "Cat 2",
    imageUrl: "",
    rating: 5,
  },
];

describe("ProductList", () => {
  it("renders empty state when no products are provided", () => {
    render(<ProductList products={[]} onProductClick={() => {}} />);
    expect(screen.getByText("No products found")).toBeInTheDocument();
  });

  it("renders a list of products", () => {
    render(<ProductList products={mockProducts} onProductClick={() => {}} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
