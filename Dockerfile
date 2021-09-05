# source: https://mherman.org/blog/dockerizing-a-react-app/

# pull official base image
FROM node:16.6.1
ENV NODE_ENV=production

# set working directory
WORKDIR /app

# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .

# start app
CMD ["npm", "start"]


