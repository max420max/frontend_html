# Use an official httpd runtime as the base image
FROM httpd:alpine

# Copy the HTML file and JavaScript code to the container
COPY index.html /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start the httpd server
CMD ["httpd-foreground"]
