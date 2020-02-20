FROM node
COPY ["package.json", "yarn.lock", "/kanban-api/"]
WORKDIR /kanban-api/
RUN yarn install
COPY * /kanban-api/
CMD ["yarn", "start"]