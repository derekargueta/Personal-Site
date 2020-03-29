
all: build run

build:
	docker build . -t personal-site

run:
	docker run -it -p 11717:11717 personal-site:latest

package: build
	docker save -o image.tar personal-site:latest

# server should run docker run -it -p 80:11717 personal-site:latest