import { Youtube } from "../types/youtube"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

if (!YOUTUBE_API_KEY) {
  throw new Error('YOUTUBE_API_KEY is not set')
}

export async function youtubeApi(query: { q?: string, maxResults?: number }) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query?.q ? query?.q : ''}&maxResults=${query.maxResults ? query.maxResults : 5}&type=video&key=${YOUTUBE_API_KEY}`

  const response = await fetch(url)

  if (!response.ok) {
    return []
  }

  const data: Youtube = await response.json()

  return data?.items.map((video) => ({
    videoId: video.id.videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.default.url
  }))
}
