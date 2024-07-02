import fastify from 'fastify'
import cors from '@fastify/cors'
import mysql from 'mysql2/promise';

import * as dotenv from "dotenv";
dotenv.config();

import { type Youtube } from './types/youtube';
import { type Video } from './types/video';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

let connection: mysql.Connection;

const server = fastify({ logger: true });
server.register(cors, {
  methods: ['GET'],
})

server.register(async (fastify, opts, done) => {
  connection = await mysql.createConnection(dbConfig);
  fastify.decorate('mysql', connection);
  done();
});

const port = Number(process.env.API_BFF_PORT) || 3333;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

if (!YOUTUBE_API_KEY) {
  throw new Error('YOUTUBE_API_KEY is not set')
}

server.get('/videos', async (request, reply): Promise<Video[] | []> => {
  const query = request.query as any

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query?.q ? query?.q : ''}&maxResults=${query.maxResults ? query.maxResults : 5}&type=video&key=${YOUTUBE_API_KEY}`

  const response = await fetch(url)

  if (!response.ok) {
    return []
  }

  const data: Youtube = await response.json()

  return data.items.map((video) => ({
    videoId: video.id.videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.default.url
  }))
})

server.get('/favorites', async (request, reply) => {
  const [rows] = await connection.query('SELECT * FROM favorites');

  return rows;
})

server.get('/favorites/:id', async (request, reply) => {
  const params = request.params as any;

  const [rows] = await connection.query('SELECT * FROM favorites WHERE id = ?', [params?.id]);

  return rows
})

server.post('/favorites', async (request, reply) => {
  const video = request.body as Video;

  const [result] = await connection.execute('INSERT INTO favorites (videoId, title, thumbnail) VALUES (?, ?, ?)', [video.videoId, video.title, video.thumbnail]);

  return {
    success: true,
    result: result
  };
})

server.delete('/favorites/:id', async (request, reply) => {
  const params = request.params as any;

  const [result] = await connection.execute('DELETE FROM favorites WHERE id = ?', [params?.id]);

  return {
    success: true,
    result: result
  };
})

server.listen({ port: port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})