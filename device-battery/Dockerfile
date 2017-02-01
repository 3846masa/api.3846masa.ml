FROM node:6-alpine

RUN npm i -g yarn
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE 3000

CMD ["yarn", "start"]
