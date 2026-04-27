FROM node

# create folder inside container 
# WORKDIR /developer/nodejs

# copy -> . means current directory my-server means create folder inside docker /developer/nodejs/my-server
# COPY . my-server/

# or
# create folder inside container 
WORKDIR /developer/nodejs/my-server

# copy -> . means current directory second . means inside docker current dir
COPY . .

# run command
RUN npm ci

CMD ["node", "index.js"]


# build file: docker build -t myserver .