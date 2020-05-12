FROM node:12.16-alpine
RUN apk add --no-cache bash
WORKDIR /usr/src/client
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]