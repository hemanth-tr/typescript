FROM node:21

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

CMD ["node", "index.js"]