FROM node:10-alpine

LABEL maintainer="Renan Machado"

RUN mkdir /usr/api
WORKDIR /usr/api

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

RUN npm i -g @adonisjs/cli

CMD ["adonis", "serve", "--dev"]
