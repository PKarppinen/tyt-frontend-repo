# Use this as a base image
FROM node

# Copy application
WORKDIR /home/docker/web
RUN mkdir css && mkdir images && mkdir js && mkdir templates && mkdir node_modules
COPY index.html /home/docker/web/
COPY Gruntfile.js /home/docker/web/
COPY css /home/docker/web/css
COPY images /home/docker/web/images
COPY js /home/docker/web/js
COPY templates /home/docker/web/templates
COPY node_modules /home/docker/web/node_modules

# Install Node http-server
RUN npm install http-server -g

# Install Grunt client
RUN npm install -g grunt-cli

# Run Grunt to setup cluster environment configs
RUN grunt --apiIP=54.77.130.18

# Give needed permissions for minified js file
RUN chmod 755 dist/js/trail-your-trails.min.js