import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import Title from './title';

describe('Title Component', () => {
  beforeAll(() => {
    if (!customElements.get('title-heading')) {
      customElements.define('title-heading', Title);
    }
  });

  it('should render the title with text "Favorites"', () => {
    document.body.innerHTML = `<title-heading text="Favorites"></title-heading>`;

    const titleHeading = document.querySelector('title-heading');
    const titleHeadingShadowRoot = document.querySelector('title-heading')?.shadowRoot;

    const h1Title = titleHeadingShadowRoot?.querySelector('.title');

    expect(titleHeading).toBeInTheDocument();
    expect(h1Title).toBeInTheDocument();
    expect(h1Title).toHaveClass('title');
    expect(h1Title).toHaveTextContent('Favorites');
  });
});
