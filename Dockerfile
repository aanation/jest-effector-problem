FROM node:14-alpine

WORKDIR /test

COPY . .

RUN npm ci
RUN npm run test