#!/bin/sh

printf "\n\n=======================================\n"
printf "Running tests"
printf "\n=======================================\n\n"
export NODE_ENV=test
yarn test

exit 0
