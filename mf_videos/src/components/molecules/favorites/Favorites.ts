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

    const favoritesIds = this.getFavoriteIds()

    const favoriteVideos = favoritesIds?.filter(videoId => this.isFavorite(videoId));

    this.favoriteCountModule(favoriteVideos?.length || 0)

    this.renderFavoriteVideos(favoriteVideos);
  }

  renderFavoriteVideos(favoritesIds: string[]) {
    this.videoCardsContainer!.innerHTML = '';

    const videosElements = favoritesIds?.map((id) => {
      return `
        <video-card videoId="${id}" isFavorite="true"></video-card>
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

  favoriteCountModule(count: number) {
    const mainDrawer = document.querySelector('main-drawer')?.shadowRoot;
    const favoriteCountElement = mainDrawer?.querySelector('#favorite-count') as HTMLElement

    import('mf_drawer/UpdateFavoriteCount').then(({ UpdateFavoriteCount }) => {
      UpdateFavoriteCount(favoriteCountElement, count)
    }).catch((error) => {
      console.error(error.message);
    })
  }
}

if (!customElements.get('favorites-page')) {
  customElements.define('favorites-page', Favorites);
}

export default Favorites;
