## clone the git repo

## Go inside the folder frontend_html
        cd frontend_html
## unzip frontend.zip and go inside frontend folder

        cd frontend 

## Create Docker Image

    docker build -t frontend .
   
## Launch container using created image

    docker run -dit -e REACT_APP_API_URL=http://<backend_ip>:9035 --name frontend frontend
    



## to run the code in local system

## go inside frontend folder 

## set the environment variable using below command

        export REACT_APP_API_URL=http://localhost:9035
     
## start the application

        npm start
        
## application will start on http://localhost:3000
   
