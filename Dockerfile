FROM node:latest AS build-env

ARG BASE_URI

RUN apt-get update \
    && apt-get install -y wget \
    && rm -rf /var/lib/apt/lists/*

# Install Go
RUN apt-get update \
    && apt-get install -y golang-go \
    && rm -rf /var/lib/apt/lists/*

# Download and install Hugo
RUN wget -O /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_Linux-64bit.tar.gz \
    && tar -xzf /tmp/hugo.tar.gz -C /tmp \
    && mv /tmp/hugo /usr/local/bin/hugo \
    && rm /tmp/hugo.tar.gz

# Copy files to container and build
RUN mkdir /app/
COPY . /app/
WORKDIR /app/

# Run Hugo server
RUN npx tinacms dev -c "hugo server -D -p 1313"
