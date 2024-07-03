import '@testing-library/jest-dom';
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
    const favoritePageShadowRoot = document.querySelector('favorites-page')?.shadowRoot;
    const titleHeading = favoritePageShadowRoot?.querySelector('title-heading');
    const videoCards = favoritePageShadowRoot?.querySelector('video-cards');

    expect(favoritePage).toBeInTheDocument();
    expect(titleHeading).toBeInTheDocument();
    expect(videoCards).toBeInTheDocument();
  });
});
