import type { Product } from "../../types/product";

export interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}
