import { createVideos } from '../create-videos'
import './videos.css'

import { getVideos } from "../../services/videos"
import { debounce } from '../../utils/debounce'

class Videos extends HTMLElement {
  constructor() {
    super()
  }

  async connectedCallback() {
    this.innerHTML = `
        <input type="text" id="search-video" class="search-video" placeholder="Pesquisar por nome">
        <div class="videos-cards" id="videos-cards"></div>
    `

    async function handleInput(event: Event) {
      const target = event.target as HTMLInputElement

      const videos = await getVideos({ name: target.value })

      if (videos) {
        createVideos(videos)
      }
    }

    const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    const debounceHandleInput = debounce(handleInput, 1000)
    searchVideo.addEventListener('input', debounceHandleInput)

    getVideos().then(videos => {
      if (videos) {
        createVideos(videos)
      }
    })
  }
}

customElements.define('videos-page', Videos)