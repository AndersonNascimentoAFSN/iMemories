import '../../atoms/input-search/input-search'
import '../../atoms/video-cards/video-cards'
import '../../atoms/video-card/video-card'
import { getVideos } from '../../../services/videos';
import { debounce } from '../../../utils/debounce';
import { IVideo } from '../../../../types/video';

class Videos extends HTMLElement {
  videoCardsShadowRoot: ShadowRoot | null | undefined;
  videoCardsContainer: HTMLElement | null | undefined;
  inputSearchShadowRoot: ShadowRoot | null | undefined;
  inputSearch: HTMLInputElement | null | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot!.innerHTML = `
      <input-search></input-search>
      <video-cards></video-cards>
    `;

    this.videoCardsShadowRoot = this.shadowRoot!.querySelector('video-cards')?.shadowRoot;
    this.videoCardsContainer = this.videoCardsShadowRoot?.querySelector('.video-cards');

    this.inputSearchShadowRoot = this.shadowRoot!.querySelector('input-search')?.shadowRoot;
    this.inputSearch = this.inputSearchShadowRoot?.querySelector('#search-video');

    this.inputSearch?.addEventListener('input', debounce(() => this.loaderVideos(this.inputSearch?.value), 2000));
  }

  connectedCallback() {
    this.loaderVideos('');
  }

  async loaderVideos(query?: string) {
    try {
      const videos = await getVideos(query);
      this.renderVideos(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  renderVideos(videos: IVideo[] | undefined) {
    this.videoCardsContainer!.innerHTML = '';

    const favoriteIds = this.getFavoriteIds();

    this.favoriteCountModule(favoriteIds.length || 0)

    const videosElements = videos?.map((video) => {
      const isFavorite = favoriteIds.includes(video.videoId);
      return `
        <video-card videoId="${video.videoId}" isFavorite="${isFavorite}"></video-card>
      `;
    }).join('');

    this.videoCardsContainer!.innerHTML = videosElements || '<title-heading text="No videos found"></title-heading>';
    this.addFavoriteButtonListeners();
  }

  getFavoriteIds(): string[] {
    const favorites = localStorage.getItem('favoriteVideoIds');
    return favorites ? JSON.parse(favorites) : [];
  }

  toggleFavoriteId(videoId: string) {
    const favoriteIds = this.getFavoriteIds();
    const index = favoriteIds.indexOf(videoId);
    if (index > -1) {
      favoriteIds.splice(index, 1);
    } else {
      favoriteIds.push(videoId);
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
          this.loaderVideos(this.inputSearch?.value);
        }
      });
    });
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

if (!customElements.get('videos-page')) {
  customElements.define('videos-page', Videos);
}

export default Videos;
