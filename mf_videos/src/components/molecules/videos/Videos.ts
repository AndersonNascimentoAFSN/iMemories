import '../../atoms/input-search/input-search'
import '../../atoms/video-cards/video-cards'

class Videos extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.render()
  }

  render() {
    const template = `
      <input-search></input-search>
      <video-cards></video-cards>
    `

    this.shadowRoot!.innerHTML = template
  }
}

if (!customElements.get('videos-page')) {
  customElements.define('videos-page', Videos)
}

export default Videos


// import { createVideos } from '../create-videos'
// import { getVideos } from "../../services/videos"
// import { debounce } from '../../utils/debounce'

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

// .search-video {
//   color: rgb(33, 33, 33);
//   font-size: 1rem;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   width: 50%;
// }

// .videos-cards {
//   display: grid;
//   gap: 1rem;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
// }

// .video-card {
//   background-color:  rgb(236, 244, 251);
//   padding: 0.5rem;
//   box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px, rgba(0, 0, 0, 0.12) 0px 0px 12px;
//   border-radius: 8px;
//   min-height: 200px;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 0.5rem;
// }

// .video-card-title {
//   font-size: 1rem;
//   color: var(--foreground-color);
// }

// .video-card-wrapper-iframe {
//   iframe {
//     width: 100%;
//     height: 200px;
//     border-radius: 8px;
//   }
// }

// .favorite-button {
//   background-color: rgb(144, 202, 249);
//   padding: 0.5rem;
//   border-color: transparent;
//   border-radius: 8px;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 0.5rem;
//   font-size: 1rem;
//   color: rgb(33, 33, 33);
// }

// .favorite-button:hover {
//   background-color: rgb(100, 181, 246);
// }