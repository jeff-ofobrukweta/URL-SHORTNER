#!/bin/sh
export NODE_ENV=development
yarn install

printf "\n\n======================================\n"
printf "Start the application"
printf "\n======================================\n\n"
yarn start:dev

exit 0
