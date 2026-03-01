import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '../app/page';

// Mock the components used in Home to avoid deep rendering issues
vi.mock('@/components/home/Hero', () => ({
    default: () => <div data-testid="hero">Hero</div>
}));
vi.mock('@/components/home/AboutSection', () => ({
    default: () => <div data-testid="about">About</div>
}));
vi.mock('@/components/home/ProductsSection', () => ({
    default: () => <div data-testid="products">Products</div>
}));
vi.mock('@/components/home/InterestSection', () => ({
    default: () => <div data-testid="interest">Interest</div>
}));
vi.mock('@/components/home/ContactSection', () => ({
    default: () => <div data-testid="contact">Contact</div>
}));

describe('Home Page', () => {
    it('renders the home page with all sections', () => {
        render(<Home />);

        expect(screen.getByTestId('hero')).toBeInTheDocument();
        expect(screen.getByTestId('about')).toBeInTheDocument();
        expect(screen.getByTestId('products')).toBeInTheDocument();
        expect(screen.getByTestId('interest')).toBeInTheDocument();
        expect(screen.getByTestId('contact')).toBeInTheDocument();
    });
});
