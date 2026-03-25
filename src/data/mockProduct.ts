import type { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    price: 299.99,
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Minimalist Leather Wallet",
    description:
      "Slim, RFID-blocking genuine leather wallet with quick-access card slots.",
    price: 45.0,
    category: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    description:
      "Track your heart rate, sleep, and workouts with this water-resistant smartwatch.",
    price: 149.5,
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 4.2,
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    description:
      "Ultra-soft, sustainably sourced organic cotton t-shirt for everyday wear.",
    price: 25.0,
    category: "Clothing",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Stainless Steel Water Bottle",
    description:
      "Double-wall vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12.",
    price: 35.0,
    category: "Home & Kitchen",
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description:
      "Tenkeyless mechanical keyboard with tactile switches and customizable RGB lighting.",
    price: 120.0,
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    rating: 4.7,
  },
  {
    id: "7",
    name: "Ceramic Coffee Mug",
    description:
      "Handcrafted ceramic mug with a matte finish, perfect for your morning brew.",
    price: 18.5,
    category: "Home & Kitchen",
    imageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
    rating: 4.4,
  },
  {
    id: "8",
    name: "Canvas Backpack",
    description:
      "Durable canvas backpack with laptop sleeve and multiple compartments for travel.",
    price: 65.0,
    category: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    rating: 4.3,
  },
];

export const categories = Array.from(
  new Set(mockProducts.map((p) => p.category)),
).sort();
