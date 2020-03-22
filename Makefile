API_NAME=kanban_api:latest
CLIENT_NAME=kanban_client:latest
DB_NAME=kanban_db:latest

all: build up

clean: down rmi

install: deps gulp build up

deps:
	cd ./api && yarn
	cd ./client && yarn

gulp:
	cd ./client && gulp

test:
	docker exec -it kanban-api yarn test
	cd ./client && yarn test

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
	@echo '-----------------------------------------------------------'
	@echo '| help		show helpful information                  |'
	@echo '| all		build and start all docker containers     |'
	@echo '| clean		stop all containers and remove all images |'
	@echo '| install	complete installation process             |'
	@echo '| deps		install all necessary dependencies        |'
	@echo '| gulp		run all gulp tasks                        |'
	@echo '| gulp		run all tests inside a docker container   |'
	@echo '| build		build all docker images                   |'
	@echo '| up     	start all docker containers               |'
	@echo '| down		stop and remove all docker containers     |'
	@echo '| stop		stop all docker containers                |'
	@echo '| rmi		remove all docker images                  |'
	@echo '-----------------------------------------------------------'