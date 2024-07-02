import { VideoModel } from "../model/videoModel";
import { VideoRepository } from "../repository/VideoRepository";

export class VideoService {
  videoRepository: VideoRepository

  constructor(videoRepository: VideoRepository) {
    this.videoRepository = videoRepository
  }

  findAllFavoritesMovies() {
    return this.videoRepository.findAll()
  }

  saveFavoriteMovie(video: VideoModel) {

    const findVideo = this.videoRepository.findById(video.videoId)

    // if (findVideo) {
    //   throw new Error('Video already exists in favorites list')
    // }

    return this.videoRepository.create(video)
  }
}