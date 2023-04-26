FROM node:16-alpine as development

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN rm -rf node_modules
RUN yarn install
RUN yarn run build
CMD ["yarn", "start:dev prices"]

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/prices/main"]