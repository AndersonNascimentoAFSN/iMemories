import { moviesComponent } from './components/movies-component'
import './movies.css'

import { getMovieByName, getMovies } from "./services/movies"
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



    // async function handleInput(event: Event) {
    //   const target = event.target as HTMLInputElement
      
    //   const movies = await getMovieByName(target.value)

    //   const container = this.querySelector('.container-page') as HTMLElement
    //   console.log('moviesss', movies)
    //   if (movies) {
    //     moviesComponent(movies, container)
    //   }
    // }

    // const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    // const debounceHandleInput = debounce(handleInput, 1000)
    // searchVideo.addEventListener('input', debounceHandleInput)

    getMovieByName('').then(movies => {
      const container = this.querySelector('.container-page') as HTMLElement
      if (movies) {
        moviesComponent(movies, container)
      }
    })
  }
}

customElements.define('movies-page', Movies)