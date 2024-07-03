import fastify from 'fastify'
import cors from '@fastify/cors'

import * as dotenv from "dotenv";
dotenv.config();

import { type Video } from './types/video';
import { youtubeApi } from './lib/youtube';

const server = fastify({ logger: process.env.NODE_ENV !== 'production' });
server.register(cors, {
  methods: ['GET'],
})

const port = Number(process.env.API_BFF_PORT) || 3003;

server.get('/videos', async (request, reply): Promise<Video[] | []> => {
  const query = request.query as any

  const videosYoutube = await youtubeApi(query)

  return videosYoutube
})

server.listen({ port: port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})