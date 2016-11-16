FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/graphql
WORKDIR /usr/src/graphql

# Install app dependencies
COPY package.json /usr/src/graphql/
RUN npm install

# Bundle app source
COPY . /usr/src/graphql

EXPOSE 3001
CMD npm start
