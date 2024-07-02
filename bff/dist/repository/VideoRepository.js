"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRepository = void 0;
class VideoRepository {
    constructor() {
        this.videos = [];
    }
    findAll() {
        this.videos;
    }
    findById(id) {
        this.videos.find(video => video.id === id);
    }
    create(video) {
        this.videos.push(video);
    }
    delete(id) {
        this.videos = this.videos.filter(video => video.id !== id);
    }
}
exports.VideoRepository = VideoRepository;
