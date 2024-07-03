import { IVideo } from '../../../../types/video';
import { getVideos } from '../../../services/videos';
import '../../atoms/title/title';
import '../../atoms/video-cards/video-cards';

class Favorites extends HTMLElement {
  videoCardsShadowRoot: ShadowRoot | null | undefined;
  videoCardsContainer: HTMLElement | null | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.renderVideos();
  }

  async renderVideos() {
    const videoCards = this.shadowRoot!.querySelector('video-cards') as HTMLElement;
    this.videoCardsShadowRoot = videoCards.shadowRoot;
    this.videoCardsContainer = this.videoCardsShadowRoot!.querySelector('#video-cards') as HTMLElement;

    try {
      const videos = await getVideos();
      const favoriteVideos = videos?.filter(video => this.isFavorite(video.videoId));
      this.renderFavoriteVideos(favoriteVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  renderFavoriteVideos(videos: IVideo[] | undefined) {
    this.videoCardsContainer!.innerHTML = '';

    const videosElements = videos?.map((video) => {
      return `
        <video-card videoId="${video.videoId}" isFavorite="true"></video-card>
      `;
    }).join('');

    this.videoCardsContainer!.innerHTML = videosElements || '<title-heading text="No favorite videos found"></title-heading>';
    this.addFavoriteButtonListeners();
  }

  getFavoriteIds(): string[] {
    const favorites = localStorage.getItem('favoriteVideoIds');
    return favorites ? JSON.parse(favorites) : [];
  }

  isFavorite(videoId: string): boolean {
    const favoriteIds = this.getFavoriteIds();
    return favoriteIds.includes(videoId);
  }

  toggleFavoriteId(videoId: string) {
    const favoriteIds = this.getFavoriteIds();
    const index = favoriteIds.indexOf(videoId);
    if (index > -1) {
      favoriteIds.splice(index, 1);
    }
    localStorage.setItem('favoriteVideoIds', JSON.stringify(favoriteIds));
  }

  addFavoriteButtonListeners() {
    const videoCards = this.videoCardsContainer?.querySelectorAll('video-card');
    videoCards?.forEach((videoCard) => {
      const button = videoCard.shadowRoot?.querySelector('button');
      button?.addEventListener('click', () => {
        const videoId = videoCard.getAttribute('videoId');
        if (videoId) {
          this.toggleFavoriteId(videoId);
          this.renderVideos();
        }
      });
    });
  }

  render() {
    const template = `
      <title-heading text="Favoritos"></title-heading>
      <video-cards></video-cards>
    `;

    this.shadowRoot!.innerHTML = template;
  }
}

if (!customElements.get('favorites-page')) {
  customElements.define('favorites-page', Favorites);
}

export default Favorites;
