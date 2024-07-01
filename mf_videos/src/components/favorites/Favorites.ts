import { videosComponent } from '../videos-component'
import { getFavoritesMovies } from '../../services/movies'

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

    getFavoritesMovies().then(videos => {
      if (videos) {
        videosComponent(videos)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

customElements.define('favorites-page', Favorites)