"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};
let connection;
const server = (0, fastify_1.default)({ logger: true });
server.register(cors_1.default, {
    methods: ['GET'],
});
// server.register(async (fastify, opts, done) => {
//   connection = await mysql.createConnection({
//     ...dbConfig,
//   });
//   fastify.decorate('mysql', connection);
//   done();
// });
const port = Number(process.env.API_BFF_PORT) || 3333;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
if (!YOUTUBE_API_KEY) {
    throw new Error('YOUTUBE_API_KEY is not set');
}
server.get('/videos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const query = request.query;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${(query === null || query === void 0 ? void 0 : query.q) ? query === null || query === void 0 ? void 0 : query.q : ''}&maxResults=${query.maxResults ? query.maxResults : 5}&type=video&key=${YOUTUBE_API_KEY}`;
    const response = yield fetch(url);
    if (!response.ok) {
        return [];
    }
    const data = yield response.json();
    return data.items.map((video) => ({
        videoId: video.id.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.default.url
    }));
}));
// server.get('/favorites', async (request, reply) => {
//   const [rows] = await connection.query('SELECT * FROM favorites');
//   return rows;
// })
// server.get('/favorites/:id', async (request, reply) => {
//   const params = request.params as any;
//   const [rows] = await connection.query('SELECT * FROM favorites WHERE id = ?', [params?.id]);
//   return rows
// })
// server.post('/favorites', async (request, reply) => {
//   const video = request.body as Video;
//   const [result] = await connection.execute('INSERT INTO favorites (videoId, title, thumbnail) VALUES (?, ?, ?)', [video.videoId, video.title, video.thumbnail]);
//   return {
//     success: true,
//     result: result
//   };
// })
server.delete('/favorites/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const params = request.params;
    const [result] = yield connection.execute('DELETE FROM favorites WHERE id = ?', [params === null || params === void 0 ? void 0 : params.id]);
    return {
        success: true,
        result: result
    };
}));
server.listen({ port: port }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
