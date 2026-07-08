FROM node:22-bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    bash \
    build-essential \
    ca-certificates \
    git \
    pkg-config \
    python3 \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
