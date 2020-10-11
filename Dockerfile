FROM node:alpine AS base

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

FROM base AS dependencies

RUN yarn install -production

RUN cp -R node_modules prod_node_modules

FROM base AS release

COPY --from=dependencies /usr/src/app/prod_node_modules  ./node_modules

COPY . ./

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
