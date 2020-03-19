API_NAME=kanban_api:latest
CLIENT_NAME=kanban_client:latest
DB_NAME=kanban_db:latest

all: build up

clean: down rmi

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

stop:
	docker-compose stop

rmi:
	docker rmi $(API_NAME) $(CLIENT_NAME) $(DB_NAME)

help:
	@echo '-------------------------------------------------------------'
	@echo '| help		shows helpful information                   |'
	@echo '| all		builds and starts all docker containers     |'
	@echo '| clean		stops all containers and removes all images |'
	@echo '| build		builds all docker images                    |'
	@echo '| up     	starts all docker containers                |'
	@echo '| down		stops and removes all docker containers     |'
	@echo '| stop		stops all docker containers                 |'
	@echo '| rmi		removes all docker images                   |'
	@echo '-------------------------------------------------------------'