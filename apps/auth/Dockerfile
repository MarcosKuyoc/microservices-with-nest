FROM node:16-alpine as development

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN rm -rf node_modules
RUN yarn install
CMD ["yarn", "start:dev auth"]

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist
ENV PORT=3000
#ENV MONGODB_URI=mongodb://root:password123@mongodb-primary:27017/

LABEL name="auth"
LABEL version="1.0.0"

CMD ["node", "dist/apps/auth/main"]