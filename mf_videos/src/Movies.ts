import { moviesComponent } from './components/movies-component'
import './movies.css'

import { getMovieById, getMovieByName, getMovies, patchMovie } from "./services/movies"
import { IMovie } from './types/movie'
import { debounce } from './utils/debounce'

class Movies extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="text" id="search-video" class="search-video" placeholder="Pesquisar por nome">
        <div class="movies-cards" id="movies-cards"></div>
    `

    async function handleInput(event: Event) {
      const target = event.target as HTMLInputElement

      const movies = await getMovieByName(target.value)

      if (movies) {
        moviesComponent(movies)
      }
    }

    const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    const debounceHandleInput = debounce(handleInput, 1000)
    searchVideo.addEventListener('input', debounceHandleInput)

    getMovieByName('').then(movies => {
      if (movies) {
        moviesComponent(movies)
      }
    })
  }
}

customElements.define('movies-page', Movies)