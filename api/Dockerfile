FROM node:12.16-alpine
RUN apk add --no-cache bash
WORKDIR /usr/src/api
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 4000
CMD ["yarn", "dev"]