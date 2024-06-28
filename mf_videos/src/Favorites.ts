import { moviesComponent } from './components/movies-component'
import './favorites.css'
import { getMovies } from './services/movies'

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

    getMovies().then(movies => {
      const container = this.querySelector('.container-page') as HTMLElement
      if (movies) {
        moviesComponent(movies, container)
      }
    })
  }
}

customElements.define('favorites-page', Favorites)