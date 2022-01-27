# Use this as a base image
FROM node

# Install Node http-server
RUN npm install http-server -g

# Install Grunt client
WORKDIR /home/docker/
RUN npm install -g grunt-cli
RUN npm install -g grunt
RUN npm install -g grunt-template
RUN npm install -g grunt-contrib-copy
RUN npm install -g grunt-contrib-concat
RUN npm install -g grunt-contrib-uglify
RUN npm install -g grunt-contrib-cssmin

# Load the app
WORKDIR /home/docker/
RUN git clone https://github.com/PKarppinen/tyt-frontend-repo.git

# Run Grunt to setup cluster environment configs
WORKDIR /home/docker/tyt-frontend-repo/
RUN grunt --apiIP=localhost

# Give needed permissions for minified js file
RUN chmod 755 dist/js/trail-your-trails.min.js

# Run http-server
CMD http-server . -p 8081