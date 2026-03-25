import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductModal } from "./ProductModal";
import type { Product } from "../../types/product";

const mockProduct: Product = {
  id: "1",
  name: "Test Modal Product",
  description: "Modal description text",
  price: 199.99,
  category: "Test Category",
  imageUrl: "https://example.com/image.jpg",
  rating: 4.8,
};

describe("ProductModal", () => {
  it("does not render when product is null", () => {
    const { container } = render(
      <ProductModal product={null} onClose={() => {}} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders product details when product is provided", () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />);

    expect(screen.getByText("Test Modal Product")).toBeInTheDocument();
    expect(screen.getByText("Modal description text")).toBeInTheDocument();
    expect(screen.getByText("$199.99")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("4.8")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(<ProductModal product={mockProduct} onClose={handleClose} />);

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking outside the modal", () => {
    const handleClose = vi.fn();
    render(<ProductModal product={mockProduct} onClose={handleClose} />);

    const backdrop = screen.getByText("Test Modal Product").closest(".fixed");
    if (backdrop) {
      fireEvent.click(backdrop);
    }

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
