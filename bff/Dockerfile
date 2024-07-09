# FROM node:16-alpine
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["node", "dist/index.js"]