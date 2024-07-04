import { IVideo } from "../../types/video";

const API_BFF = process.env.API_BFF
export async function getVideos(query?: { name?: string, maxResults?: number }) {
  try {
    const movies: Promise<IVideo[]> = fetch(`${API_BFF}/videos?q=${query?.name ? query?.name : ''}&maxResults=${query?.maxResults ? query?.maxResults : 8}`)
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
