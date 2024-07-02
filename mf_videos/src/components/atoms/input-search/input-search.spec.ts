import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import InputSearch from './input-search';

describe('InputSearch Component', () => {
  beforeAll(() => {
    if (!customElements.get('input-search')) {
      customElements.define('input-search', InputSearch);
    }
  });

  it('should render the input search', () => {
    document.body.innerHTML = `<input-search></input-search>`;

    const inputSearch = document.querySelector('input-search');
    const inputShadowRoot = document.querySelector('input-search')?.shadowRoot;

    const input = inputShadowRoot?.querySelector('.search-video');

    expect(inputSearch).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'search-video');
    expect(input).toHaveClass('search-video');
    expect(input).toHaveAttribute('placeholder', 'Pesquisar por nome');
  });
});
