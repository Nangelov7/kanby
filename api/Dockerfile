FROM node
COPY ["package.json", "yarn.lock", "/kanban-api/"]
WORKDIR /kanban-api/
RUN yarn install
COPY * .
CMD ["yarn", "start"]