"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModel = void 0;
const uuid_1 = require("uuid");
class VideoModel {
    constructor(videoId, title, thumbnail, isFavorite) {
        this.id = (0, uuid_1.v4)();
        this.videoId = videoId;
        this.title = title;
        this.thumbnail = thumbnail;
        this.isFavorite = isFavorite;
    }
}
exports.VideoModel = VideoModel;
