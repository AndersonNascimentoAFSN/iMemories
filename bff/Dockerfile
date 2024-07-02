# FROM node:16-alpine
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

RUN apt-get update && apt-get install -y curl

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["node", "dist/index.js"]