import { moviesComponent } from './components/movies-component'
import './movies.css'

import { getMovies } from "./services/movies"
import { debounce } from './utils/debounce'

class Movies extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container-page">
        <input type="text" id="search-video" class="search-video" placeholder="Pesquisar por nome">
      </div>
    `

    const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement
      console.log(target.value)
    }
    const debounceHandleInput = debounce(handleInput, 1000)
    searchVideo.addEventListener('input', debounceHandleInput)
    
    getMovies().then(movies => {
      const container = this.querySelector('.container-page') as HTMLElement
      if (movies) {
        moviesComponent(movies, container)
      }
    })
  }
}

customElements.define('movies-page', Movies)