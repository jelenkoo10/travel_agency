FROM node:alpine

WORKDIR /app/frontend

COPY . .


RUN npm install

RUN apk update && apk add bash

COPY . .



# CMD ["npm", "run", "dev"]