FROM node:10-alpine

LABEL application="url-app"

ENV TERM=xterm-256color

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN npm install -g yarn@1.12.x && rm -rf package-lock.json
COPY package.json yarn.lock  /usr/app/
RUN yarn install

COPY docker/tests/entrypoint.sh /usr/app

ENTRYPOINT ["sh", "/usr/app/entrypoint.sh"]
