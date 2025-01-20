FROM node:16-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3560

CMD ["node","index.js"]