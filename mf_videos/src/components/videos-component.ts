import { getMovieById, patchMovie } from "../services/movies"
import { IVideo } from "../types/video"

export async function videosComponent(
  videos: IVideo[],
) {
  const videosCards = document.querySelector('.videos-cards') as HTMLElement

  videosCards.innerHTML = ''

  let favoriteCount = videos.reduce((acc, video) => {
    if (video.isFavorite) {
      return acc + 1
    }

    return acc
  }, 0)


  videos.forEach(video => {
    const div = document.createElement('div')
    div.classList.add('video-card')
    div.setAttribute('data-id', String(video.id))
    div.innerHTML = `
          <h2 class="video-card-title">${video.name}</h2>
          <span class="video-card-title">${video.isFavorite}</span>
        `

    div.addEventListener('click', async () => {
      const videoId = div.getAttribute('data-id') as string
      const video = await getMovieById(videoId)

      if (video) {
        const updatedVideo = await patchMovie(String(video.id), {
          isFavorite: !video.isFavorite
        })

        if (updatedVideo) {
          div.innerHTML = `
                <h2 class="video-card-title">${updatedVideo.name}</h2>
                <span class="video-card-title">${updatedVideo.isFavorite}</span>
              `

          favoriteCount = updatedVideo.isFavorite ? favoriteCount + 1 : favoriteCount - 1

          const favoriteCountElement = document.querySelector('#favorite-count') as HTMLElement | null

          if (favoriteCountElement) {
            favoriteCountElement.innerText = `(${favoriteCount})`
          }
        }
      }
    })

    const favoriteCountElement = document.querySelector('#favorite-count') as HTMLElement | null

    if (favoriteCountElement) {
      favoriteCountElement.innerText = `(${favoriteCount})`
    }

    videosCards.appendChild(div)
  })
}
