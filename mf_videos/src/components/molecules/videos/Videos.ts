import '../../atoms/input-search/input-search'
import '../../atoms/video-cards/video-cards'
import '../../atoms/video-card/video-card'
import { getVideos } from '../../../services/videos';
import { debounce } from '../../../utils/debounce';
import { IVideo } from '../../../../types/video';

class Videos extends HTMLElement {
  videoCardsShadowRoot: ShadowRoot | null | undefined
  videoCardsContainer: HTMLElement | null | undefined
  inputSearchShadowRoot: ShadowRoot | null | undefined
  inputSearch: HTMLInputElement | null | undefined

  constructor() {
    super()
    this.attachShadow({ mode: 'open' });

    this.shadowRoot!.innerHTML = `
      <input-search></input-search>
      <video-cards></video-cards>
    `

    this.videoCardsShadowRoot = this.shadowRoot!.querySelector('video-cards')?.shadowRoot
    this.videoCardsContainer = this.videoCardsShadowRoot?.querySelector('.video-cards')

    this.inputSearchShadowRoot = this.shadowRoot!.querySelector('input-search')?.shadowRoot
    this.inputSearch = this.inputSearchShadowRoot?.querySelector('#search-video')

    this.inputSearch?.addEventListener('input', debounce(() => this.loaderVideos(this.inputSearch?.value), 2000))
  }

  connectedCallback() {
    this.loaderVideos('')
  }

  async loaderVideos(query?: string) {
    try {
      const videos = await getVideos(query)
      this.renderVideos(videos)
    } catch (error) {
      console.error('Error fetching videos:', error)
    }
  }

  renderVideos(videos: IVideo[] | undefined) {
    this.videoCardsContainer!.innerHTML = '';

    const videosElements = videos?.map((video) => {
      return `
        <video-card videoId="${video.videoId}" isFavorite="false"></video-card>
      `
    }).join('')

    this.videoCardsContainer!.innerHTML = videosElements || '<title-heading text="No videos found"></title-heading>'
  }
}

if (!customElements.get('videos-page')) {
  customElements.define('videos-page', Videos)
}

export default Videos
