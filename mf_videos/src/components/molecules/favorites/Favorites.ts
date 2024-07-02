// import { createVideos } from '../create-videos'
// import { getFavoritesVideos } from '../../services/videos'

import './favorites.css'

class Favorites extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
        <h1 class="title">Favoritos</h1>
        <div class="videos-cards" id="videos-cards"></div>
    `

    // getFavoritesVideos().then(videos => {
    //   if (videos) {
    //     createVideos(videos)
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
  }
}

if (!customElements.get('favorites-page')) {
  customElements.define('favorites-page', Favorites);
}

export default Favorites