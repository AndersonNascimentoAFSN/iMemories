import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { describe, expect, it, beforeAll } from 'vitest'

import Favorites from './Favorites';

describe('Favorites Component', () => {
  beforeAll(() => {
    if (!customElements.get('favorites-page')) {
      customElements.define('favorites-page', Favorites);
    }
  });

  it('should render the title and cards container', () => {
    document.body.innerHTML = `<favorites-page></favorites-page>`;

    const favoritePage = document.querySelector('favorites-page');
    const title = document.querySelector('.title');
    const cardsContainer = document.querySelector('.videos-cards');

    expect(favoritePage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Favoritos');
    expect(title).toHaveClass('title');
    expect(title).toHaveRole('heading');
    expect(cardsContainer).toBeInTheDocument();
    expect(cardsContainer).toHaveClass('videos-cards');
    expect(cardsContainer).toHaveAttribute('id', 'videos-cards');
    expect(cardsContainer).toHaveTextContent('');
  });
});
