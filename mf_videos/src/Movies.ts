import { moviesComponent } from './components/movies-component'
import './movies.css'

import { getMovies } from "./services/movies"

class Movies extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container-page">
        <h1 class="title">Filmes</h1>
      </div>
    `

    const container = this.querySelector('.container-page') as HTMLElement

    
    getMovies().then(movies => {
      const container = this.querySelector('.container-page') as HTMLElement
      if (movies) {
        moviesComponent(movies, container)
      }
    })
  }
}

customElements.define('movies-page', Movies)