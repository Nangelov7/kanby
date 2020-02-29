API_NAME=kanban_api:latest
CLIENT_NAME=kanban_client:latest

all: build up

clean: down rmi

build:
	sudo docker-compose build

up:
	sudo docker-compose up

down:
	sudo docker-compose down

stop:
	sudo docker-compose stop

rmi:
	sudo docker rmi $(API_NAME) $(CLIENT_NAME)

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