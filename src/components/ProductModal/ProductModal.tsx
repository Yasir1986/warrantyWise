import React, { useEffect } from "react";
import { X, Star } from "lucide-react";
import type { ProductModalProps } from "./ProductModal.types";

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 bg-gray-50 relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full min-h-[250px] md:min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 shadow-sm">
            {product.category}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative max-h-[80vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 pr-8 leading-tight">
            {product.name}
          </h2>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-amber-900">
                {product.rating}
              </span>
            </div>
          </div>

          <p className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="prose prose-sm text-gray-600 mb-8 flex-grow">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
              Description
            </h3>
            <p className="leading-relaxed">{product.description}</p>
          </div>

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-sm hover:shadow-md active:scale-[0.98] duration-200"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
