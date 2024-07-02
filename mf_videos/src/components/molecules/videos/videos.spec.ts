import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { describe, expect, it, beforeAll } from 'vitest'

import Videos from './Videos';

describe('Videos Component', () => {
  beforeAll(() => {
    if (!customElements.get('videos-page')) {
      customElements.define('videos-page', Videos);
    }
  });

  it('should render the input and cards container', () => {
    document.body.innerHTML = `<videos-page></videos-page>`;

    const videosPage = document.querySelector('videos-page');

    const inputShadowRoot = document.querySelector('input-search')?.shadowRoot;

    const input = inputShadowRoot?.querySelector('.search-video');
    const cardsContainer = document.querySelector('.videos-cards');

    expect(videosPage).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'search-video');
    expect(input).toHaveClass('search-video');
    expect(input).toHaveAttribute('placeholder', 'Pesquisar por nome');
    expect(cardsContainer).toBeInTheDocument();
    expect(cardsContainer).toHaveClass('videos-cards');
    expect(cardsContainer).toHaveAttribute('id', 'videos-cards');
    expect(cardsContainer).toHaveTextContent('');
  });
});
