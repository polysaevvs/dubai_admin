FROM node:18

WORKDIR /app

COPY . .

RUN apt update -y && apt install build-essential libvips-dev iproute2 -y
RUN npm install --unsafe-perm sharp
RUN yarn install
RUN npx update-browserslist-db@latest -y
RUN yarn build

EXPOSE 1337

CMD ["yarn","start"]
