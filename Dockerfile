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

WORKDIR /opt/HugoApp

# Copy Hugo config into the container Workdir.
COPY . .

# Run Hugo in the Workdir to generate HTML.
RUN hugo

# Stage 2
FROM nginx:1.25-alpine

# Set workdir to the NGINX default dir.
WORKDIR /usr/share/nginx/html

# Copy HTML from previous build into the Workdir.
COPY --from=build-env /opt/HugoApp/public .

# Expose port 80
EXPOSE 80/tcp

# Run Hugo server
#RUN npx tinacms dev -c "hugo server -D -p 1313"

# Stage 2 - Create the run-time image
#FROM nginx:mainline-alpine3.18-slim
#COPY --from=build-env /app/build/web /usr/share/nginx/html


