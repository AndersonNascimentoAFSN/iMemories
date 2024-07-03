import { IVideo } from "../../types/video";

export async function getVideos(id?: string) {
  try {
    const movies: Promise<IVideo[]> = fetch(`http://localhost:3333/videos/${id ?? ''}`)
      .then(response => response.json())
      .then(data => {
        return data
      }).catch(err => {
        console.error(err.message)
        return null
      })

    return movies
  } catch {
    null
  }
}

// export async function getVideos(query?: { name?: string, maxResults?: number }) {
//   try {
//     const movies: Promise<IVideo[]> = fetch(`http://localhost:3333/videos?q=${query?.name ? query?.name : ''}&maxResults=${query?.maxResults ? query?.maxResults : 8}`)
//       .then(response => response.json())
//       .then(data => {
//         return data
//       }).catch(err => {
//         console.error(err.message)
//         return null
//       })

//     return movies
//   } catch {
//     null
//   }
// }

// export async function getFavoritesVideos() {
//   try {
//     const movies: Promise<IVideo[]> = fetch('http://localhost:3333/favorites').then(response => response.json()).then(data => {
//       return data
//     })

//     return movies
//   } catch {
//     null
//   }
// }

// export async function createFavoritesVideos({
//   thumbnail,
//   title,
//   videoId
// }: {
//   videoId: string
//   title: string
//   thumbnail: string
// }) {
//   try {
//     const movies: Promise<IVideo[]> = fetch('http://localhost:3333/favorites', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         videoId: videoId,
//         title: title,
//         thumbnail: thumbnail,
//       })
//     }).then(response => response.json()).then(data => {
//       return data
//     })

//     return movies
//   } catch {
//     null
//   }

// }

// export async function getVideoById(id: string | undefined) {
//   try {
//     const movie: Promise<IVideo> = fetch(`http://localhost:3333/favorites/${id}`).then(response => response.json()).then(data => {
//       return data
//     })

//     return movie
//   } catch {
//     null
//   }
// }

