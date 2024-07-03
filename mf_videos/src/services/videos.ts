import { IVideo } from "../../types/video";

// export async function getVideos(id?: string) {
//   try {
//     const movies: Promise<IVideo[]> = fetch(`http://localhost:3333/videos/${id ?? ''}`)
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

export async function getVideos(query?: { name?: string, maxResults?: number }) {
  try {
    const movies: Promise<IVideo[]> = fetch(`http://localhost:3333/videos?q=${query?.name ? query?.name : ''}&maxResults=${query?.maxResults ? query?.maxResults : 8}`)
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
