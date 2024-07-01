import { videosComponent } from '../videos-component'
import './videos.css'

import { getMovieByName } from "../../services/movies"
import { debounce } from '../../utils/debounce'

class Videos extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="text" id="search-video" class="search-video" placeholder="Pesquisar por nome">
        <div class="videos-cards" id="videos-cards"></div>
    `

    async function handleInput(event: Event) {
      const target = event.target as HTMLInputElement

      const videos = await getMovieByName(target.value)

      if (videos) {
        videosComponent(videos)
      }
    }

    const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    const debounceHandleInput = debounce(handleInput, 1000)
    searchVideo.addEventListener('input', debounceHandleInput)

    getMovieByName('').then(videos => {
      if (videos) {
        videosComponent(videos)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

customElements.define('videos-page', Videos)