API_NAME=kanby_api:latest
CLIENT_NAME=kanby_client:latest
DB_NAME=kanby_db:latest

install: deps gulp prod

deps:
	cd ./api && yarn
	cd ./client && yarn

gulp:
	cd ./client && gulp

test:
	docker exec -it kanby-api yarn test
	# cd ./client && yarn test

build:
	docker-compose build

up:
	docker-compose up

prod:
	docker-compose -f docker-compose.prod.yml up -d --build

dev:
	docker-compose up -d --build

down:
	docker-compose down

stop:
	docker-compose stop

rmi:
	docker rmi $(API_NAME) $(CLIENT_NAME) $(DB_NAME)

setup_heroku:
	curl -n -X POST https://api.heroku.com/app-setups \
		-d '{"source_blob": { "url":"https://github.com/nangelov7/kanby/tarball/master/"} }' \
		-H "Content-Type: application/json" \
		-H "Accept: application/vnd.heroku+json; version=3"

help:
	@echo '-------------------------------------------------------------------------------------------'
	@echo '| help						show helpful information                  |'
	@echo '| install					complete installation process             |'
	@echo '| deps						install all necessary dependencies        |'
	@echo '| gulp						run all gulp tasks                        |'
	@echo '| test						run all tests inside a docker container   |'
	@echo '| build						build all docker images                   |'
	@echo '| up     					start all docker containers               |'
	@echo '| prod						build and start production containers     |'
	@echo '| dev						build and start development containers    |'
	@echo '| down						stop and remove all docker containers     |'
	@echo '| stop						stop all docker containers                |'
	@echo '| rmi						remove all docker images                  |'
	@echo '| setup_heroku					integrate with heroku          		  |'
	@echo '-------------------------------------------------------------------------------------------'