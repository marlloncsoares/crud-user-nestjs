FROM node:14

COPY . ./app

WORKDIR /app

ARG NODE_ENV="development"
ARG APP_VERSION="development"

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
