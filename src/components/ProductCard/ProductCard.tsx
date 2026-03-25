import React from "react";
import { Star } from "lucide-react";
import type { ProductCardProps } from "./ProductCard.types";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full cursor-pointer"
    >
      <div className="aspect-square w-full relative overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2">
            {product.name}
          </h3>
          <span className="font-bold text-lg text-gray-900 shrink-0">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mt-auto">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
};
