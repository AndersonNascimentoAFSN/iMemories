import { VideoModel } from "../model/videoModel"

export class VideoRepository {
  videos: any[]

  constructor() {
    this.videos = []
  }

  findAll() {
    this.videos
  }

  findById(id: string) {
    this.videos.find(video => video.id === id)
  }

  create(video: any) {
    this.videos.push(video)
  }

  delete(id: string) {
    this.videos = this.videos.filter(video => video.id !== id)
  }
}