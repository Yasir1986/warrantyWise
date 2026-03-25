import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types/product';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test description',
  price: 99.99,
  category: 'Test Category',
  imageUrl: 'https://example.com/image.jpg',
  rating: 4.5,
};

describe('ProductCard', () => {
  it('renders product details correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    
    const image = screen.getByRole('img', { name: 'Test Product' });
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
