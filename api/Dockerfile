FROM node
WORKDIR /usr/src/api
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 4000
CMD ["yarn", "start"]