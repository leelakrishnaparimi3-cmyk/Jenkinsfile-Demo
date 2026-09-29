FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm istall

COPY server.js .

EXPOSE 3000

CMD["npm","start"]