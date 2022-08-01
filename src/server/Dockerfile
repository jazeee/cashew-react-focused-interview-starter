FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm i
RUN npm install --global --unsafe-perm nodemon
CMD ["nodemon", "start"]
