FROM node:alpine as build

WORKDIR /app

RUN npm cache clean --force
COPY package.json ./
RUN npm install

COPY ./ ./

RUN npm run prod


FROM nginx
COPY --from=build /app/build /usr/share/nginx/html



# /app/build
