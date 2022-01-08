# Up on the daemon develop
build-up:
	docker-compose up -d --build
daemon:
	docker-compose up -d
# stop
stop:
	docker-compose stop
# down
down:
	docker-compose down