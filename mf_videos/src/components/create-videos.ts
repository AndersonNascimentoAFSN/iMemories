import { createFavoritesVideos, getFavoritesVideos, getVideoById } from "../services/videos"
import { IVideo } from "../types/video"

export async function createVideos(
  videos: IVideo[],
) {
  const videosCards = document.querySelector('.videos-cards') as HTMLElement

  videosCards.innerHTML = ''

  videos.forEach(async (video) => {
    const videoCard = document.createElement('div')
    videoCard.classList.add('video-card')
    videoCard.setAttribute('data-id', String(video.videoId))

    videoCard.innerHTML = `
      <div
        class="video-card-wrapper-iframe"
      >
        <iframe src="https://www.youtube.com/embed/${video.videoId}" frameborder="0" allowfullscreen></iframe>
      </div>
      <button
        class="favorite-button"
        id="favorite-video-button"
      >
        <span></span>
        <span>☆</span>
      </button>
    `
    videosCards.appendChild(videoCard)


    videoCard.addEventListener('click', async () => {
      const videoId = videoCard.getAttribute('data-id') as string
    })

    const favoriteCountElement = document.querySelector('#favorite-count') as HTMLElement | null

    // if (favoriteCountElement) {
    //   favoriteCountElement.innerText = `(${favoriteCount})`
    // }

    videosCards.appendChild(videoCard)
  })
}
