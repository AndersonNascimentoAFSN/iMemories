"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
class VideoService {
    constructor(videoRepository) {
        this.videoRepository = videoRepository;
    }
    findAllFavoritesMovies() {
        return this.videoRepository.findAll();
    }
    saveFavoriteMovie(video) {
        const findVideo = this.videoRepository.findById(video.videoId);
        // if (findVideo) {
        //   throw new Error('Video already exists in favorites list')
        // }
        return this.videoRepository.create(video);
    }
}
exports.VideoService = VideoService;
