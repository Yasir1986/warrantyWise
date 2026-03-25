import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders basic UI", () => {
    render(<App />);

    expect(screen.getByText("Storefront")).toBeInTheDocument();
    expect(screen.getByText("Our Products")).toBeInTheDocument();
  });

  it("renders products", () => {
    render(<App />);

    expect(
      screen.getByText("Wireless Noise-Cancelling Headphones")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Minimalist Leather Wallet")
    ).toBeInTheDocument();
  });

  it("filters products via search", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search products...");

    fireEvent.change(input, { target: { value: "wallet" } });

    expect(
      screen.getByText("Minimalist Leather Wallet")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Wireless Noise-Cancelling Headphones")
    ).not.toBeInTheDocument();
  });

  it("filters by category", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /electronics/i });
    fireEvent.click(button);

    expect(
      screen.getByText("Wireless Noise-Cancelling Headphones")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Minimalist Leather Wallet")
    ).not.toBeInTheDocument();
  });
});