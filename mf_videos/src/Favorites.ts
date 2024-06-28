import { moviesComponent } from './components/movies-component'
import './favorites.css'
import { getFavoritesMovies } from './services/movies'

class Favorites extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
      <div class="container-page">
        <h1 class="title">Favoritos</h1>
      </div>
    `

    getFavoritesMovies().then(movies => {
      const container = this.querySelector('.container-page') as HTMLElement
      if (movies) {
        moviesComponent(movies, container)
      }
    })
  }
}

customElements.define('favorites-page', Favorites)