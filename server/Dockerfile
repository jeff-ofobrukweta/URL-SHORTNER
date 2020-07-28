FROM node:10-alpine

LABEL application="url-app"

ENV TERM=xterm-256color NODE_ENV=$NODE_ENV

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .

RUN yarn install
RUN rm -rf package-lock.json
EXPOSE 5000

CMD [ "npm", "start" ]

COPY . .
