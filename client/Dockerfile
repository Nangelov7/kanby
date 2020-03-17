FROM node
WORKDIR /client
COPY ["package.json", "yarn.lock", "client/"]
RUN yarn install
COPY . client/
EXPOSE 3000
CMD ["yarn", "start"]