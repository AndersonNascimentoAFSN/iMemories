import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import Drawer from './Drawer';

describe('Drawer Component', () => {
  beforeAll(() => {
    if (!customElements.get('main-drawer')) {
      customElements.define('main-drawer', Drawer);
    }
  });

  it('should render the navigation links', () => {
    document.body.innerHTML = `<main-drawer></main-drawer>`;

    const drawerShadowRoot = document.querySelector('main-drawer')?.shadowRoot;
    const drawer = drawerShadowRoot?.querySelector('.drawer')
    const links = drawerShadowRoot?.querySelectorAll('.link')

    expect(drawer)?.toBeInTheDocument();
    const linkToMovies = links?.item(0);
    const linkToFavorite = links?.item(1);

    expect(links).toHaveLength(2);
    expect(linkToMovies?.textContent?.trim()).toBe('Vídeos');
    expect(linkToFavorite?.textContent?.trim()).toBe('Favoritos');
    expect(linkToMovies).toHaveAttribute('href', '/');
    expect(linkToMovies).toHaveAttribute('id', 'page-movies');
    expect(linkToFavorite).toHaveAttribute('href', '/favorites');
    expect(linkToFavorite).toHaveAttribute('id', 'page-favorites');
  });

  it('should have a favorite count span', () => {
    const drawerShadowRoot = document.querySelector('main-drawer')?.shadowRoot;
    const favoriteCountSpan = drawerShadowRoot?.querySelector('#favorite-count')
    expect(favoriteCountSpan).toBeInTheDocument();
  });
});
