FROM node
WORKDIR /api
COPY ["package.json", "yarn.lock", "/api/"]
RUN yarn install
COPY . /api/
EXPOSE 4000
CMD ["yarn", "start"]