docker-compose run --rm node sh -c "npm i -g create-react-app && create-react-app react-sample"
docker-compose run --rm node npm install
docker-compose run --rm --service-ports node npm start