import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import VideoCards from './video-cards';

describe('VideoCards Component', () => {
  beforeAll(() => {
    if (!customElements.get('video-cards')) {
      customElements.define('video-cards', VideoCards);
    }
  });

  it('should render the video cards', () => {
    document.body.innerHTML = `<video-cards></video-cards>`;

    const videoCards = document.querySelector('video-cards');
    const videoCardsShadowRoot = document.querySelector('video-cards')?.shadowRoot;

    const containerCards = videoCardsShadowRoot?.querySelector('.video-cards');

    expect(videoCards).toBeInTheDocument();
    expect(containerCards).toBeInTheDocument();
    expect(containerCards).toHaveClass('video-cards');
    expect(containerCards).toHaveAttribute('id', 'video-cards');
  });
});
