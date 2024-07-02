// import { createVideos } from '../create-videos'
import './videos.css'
import '../../atoms/input-search/input-search'
import '../../atoms/video-cards/video-cards'

// import { getVideos } from "../../services/videos"
// import { debounce } from '../../utils/debounce'

class Videos extends HTMLElement {
  constructor() {
    super()
  }

  async connectedCallback() {
    this.innerHTML = `
        <input-search></input-search>
        <video-cards></video-cards>
    `

    // async function handleInput(event: Event) {
    //   const target = event.target as HTMLInputElement

    //   const videos = await getVideos({ name: target.value })

    //   if (videos) {
    //     createVideos(videos)
    //   }
    // }

    // const searchVideo = this.querySelector('#search-video') as HTMLInputElement
    // const debounceHandleInput = debounce(handleInput, 1000)
    // searchVideo.addEventListener('input', debounceHandleInput)

    // getVideos().then(videos => {
    //   if (videos) {
    //     createVideos(videos)
    //   }
    // })
  }
}

if (!customElements.get('videos-page')) {
  customElements.define('videos-page', Videos)
}

export default Videos