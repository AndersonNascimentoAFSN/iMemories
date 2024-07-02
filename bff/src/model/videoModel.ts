import { v4 } from 'uuid'

export class VideoModel {
  id: string
  videoId: string
  title: string
  thumbnail: string
  isFavorite?: boolean

  constructor(videoId: string, title: string, thumbnail: string, isFavorite?: boolean) {
    this.id = v4()
    this.videoId = videoId
    this.title = title
    this.thumbnail = thumbnail
    this.isFavorite = isFavorite
  }
}