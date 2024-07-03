import '@testing-library/jest-dom';
import { describe, expect, it, beforeAll } from 'vitest'

import VideoCard from './video-card';

describe('VideoCard Component', () => {
  beforeAll(() => {
    if (!customElements.get('video-card')) {
      customElements.define('video-card', VideoCard);
    }
  });

  it('should render the card with favorite icon', () => {
    document.body.innerHTML = `<video-card isFavorite="true" videoId="afsn"></video-card>`;

    const videoCard = document.querySelector('video-card');
    const videoCardShadowRoot = document.querySelector('video-card')?.shadowRoot;
    const videoCardContainer = videoCardShadowRoot?.querySelector('#video-card');

    const favoriteIcon = videoCardShadowRoot?.querySelector('#favorite-icon');
    const favoriteButton = videoCardShadowRoot?.querySelector('#favorite-video-button');
    const iframe = videoCardShadowRoot?.querySelector('#iframe');

    expect(videoCardContainer).toBeInTheDocument();
    expect(videoCardContainer).toHaveClass('video-card');
    expect(videoCard).toBeInTheDocument();
    expect(videoCard).toHaveAttribute('isfavorite', 'true');
    expect(videoCard).toHaveAttribute('videoid', 'afsn');
    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveClass('favorite-button');
    expect(iframe).toBeInTheDocument();
  });
  it('should render the card with unfavorite icon', () => {
    document.body.innerHTML = `<video-card isFavorite="false" videoId="abcd"></video-card>`;

    const videoCard = document.querySelector('video-card');
    const videoCardShadowRoot = document.querySelector('video-card')?.shadowRoot;
    const videoCardContainer = videoCardShadowRoot?.querySelector('#video-card');

    const unfavoriteIcon = videoCardShadowRoot?.querySelector('#unfavorite-icon');
    const favoriteButton = videoCardShadowRoot?.querySelector('#favorite-video-button');
    const iframe = videoCardShadowRoot?.querySelector('#iframe');

    expect(videoCardContainer).toBeInTheDocument();
    expect(videoCardContainer).toHaveClass('video-card');
    expect(videoCard).toBeInTheDocument();
    expect(videoCard).toHaveAttribute('isfavorite', 'false');
    expect(videoCard).toHaveAttribute('videoid', 'abcd');
    expect(unfavoriteIcon).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveClass('favorite-button');
    expect(iframe).toBeInTheDocument();
  });
});
