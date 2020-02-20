FROM node
COPY ["package.json", "yarn.lock", "/kanban-web/"]
WORKDIR /kanban-web/
RUN yarn install
COPY * /kanban-web/
CMD ["yarn", "start"]