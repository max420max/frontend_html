# frontend_html

## Create Docker Image

    docker build -t frontend
   
## Launch container using created image

    docker run dit -e API_URL=http://<backend_ip>:9035 --name frontend frontend
   
