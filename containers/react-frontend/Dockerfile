FROM node:lts-slim as builder
WORKDIR /work
#RUN apt-get update \
#    && apt-get install --no-install-recommends -y python build-essential unzip \
#    && apt-get clean
#RUN npm install -g node-gyp
ADD package.json .
ADD package-lock.json .
RUN npm ci
ADD tsconfig.json .
ADD src src
ADD public public
RUN npm run build

FROM nginx:stable-alpine as runner
RUN apk add --no-cache bash sed coreutils
ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /work/build public
EXPOSE 80
ENTRYPOINT ["bash", "-c", "nginx -g \"daemon off;\""]