import { getVideos } from '../../../services/videos';
import '../../atoms/title/title'
import '../../atoms/video-cards/video-cards'

class Favorites extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()

    this.renderVideos()
  }

  async renderVideos() {
    const videoCards = this.shadowRoot!.querySelector('video-cards') as HTMLElement
    const videoCardShadowRoot = videoCards.shadowRoot
    const videoCardContainer = videoCardShadowRoot!.querySelector('#video-cards') as HTMLElement

    const videos = await getVideos()

    const videosElements = videos?.map((video) => {
      return `
        <video-card videoId="${video.videoId}" isFavorite="true"></video-card>
      `
    }).join('')

    videoCardContainer.innerHTML = videosElements || '<title-heading text="No videos found"></title-heading>'
  }

  render() {
    const template = `
      <title-heading text="Favoritos"></title-heading>
      <video-cards></video-cards>
    `

    this.shadowRoot!.innerHTML = template
  }
}

if (!customElements.get('favorites-page')) {
  customElements.define('favorites-page', Favorites);
}

export default Favorites


// import { createVideos } from '../create-videos'
// import { getFavoritesVideos } from '../../services/videos'

// getFavoritesVideos().then(videos => {
//   if (videos) {
//     createVideos(videos)
//   }
// }).catch(err => {
//   console.log(err)
// })