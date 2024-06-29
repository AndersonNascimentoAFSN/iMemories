import { moviesComponent } from './components/movies-component'
import './favorites.css'
import { getFavoritesMovies } from './services/movies'

class Favorites extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
        <h1 class="title">Favoritos</h1>
        <div class="movies-cards" id="movies-cards"></div>
    `

    getFavoritesMovies().then(movies => {
      if (movies) {
        moviesComponent(movies)
      }
    })
  }
}

customElements.define('favorites-page', Favorites)