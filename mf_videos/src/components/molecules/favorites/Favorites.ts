import '../../atoms/title/title'
import '../../atoms/video-cards/video-cards'

class Favorites extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
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