FROM node:lts-slim as builder
WORKDIR /work
#RUN apt-get update \
#    && apt-get install --no-install-recommends -y python build-essential unzip \
#    && apt-get clean
#RUN npm install -g node-gyp
ADD package.json .
ADD yarn.lock .
RUN yarn install --frozen-lockfile
ADD tsconfig.json .
ADD src src
RUN yarn build

FROM node:lts-alpine as runner
COPY --from=builder /work/dist dist
ADD package.json .
ADD yarn.lock .
RUN yarn install --frozen-lockfile
EXPOSE 9000
ENTRYPOINT ["node", "dist/server.js"]
