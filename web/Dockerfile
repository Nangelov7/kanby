FROM node
WORKDIR /web
COPY ["package.json", "yarn.lock", "/web/"]
RUN yarn install
COPY . /web/
EXPOSE 3000
CMD ["yarn", "start"]