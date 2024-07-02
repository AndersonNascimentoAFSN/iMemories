import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
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

    const drawer = document.querySelector('main-drawer');
    expect(drawer)?.toBeInTheDocument();
    const links = drawer?.querySelectorAll('.link');
    const linkToMovies = links?.item(0);
    const linkToFavorite = links?.item(1);

    expect(links).toHaveLength(2);
    expect(screen.getByText('Vídeos')).toBeInTheDocument();
    expect(screen.getByText('Favoritos')).toBeInTheDocument();
    expect(linkToMovies).toHaveAttribute('href', '/');
    expect(linkToMovies).toHaveAttribute('id', 'page-movies');
    expect(linkToFavorite).toHaveAttribute('href', '/favorites');
    expect(linkToFavorite).toHaveAttribute('id', 'page-favorites');
  });

  it('should have a favorite count span', () => {
    const favoriteCountSpan = document.querySelector('#favorite-count');
    expect(favoriteCountSpan).toBeInTheDocument();
  });
});
