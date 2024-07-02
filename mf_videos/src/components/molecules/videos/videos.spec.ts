import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import Videos from './Videos';

describe('Videos Component', () => {
  beforeAll(() => {
    if (!customElements.get('videos-page')) {
      customElements.define('videos-page', Videos);
    }
  });

  it('should render the input search and video cards components', () => {
    document.body.innerHTML = `<videos-page></videos-page>`;

    const videosPage = document.querySelector('videos-page');
    const videosPageShadowRoot = document.querySelector('videos-page')?.shadowRoot;

    const inputSearch = videosPageShadowRoot?.querySelector('input-search');
    const videoCards = videosPageShadowRoot?.querySelector('video-cards');

    expect(videosPage).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
    expect(videoCards).toBeInTheDocument();
  });
});
