## Setup

To run the project, be sure to spin up the necessary RabbitMQ container using:

````
docker-compose up -d
````

Once the RabbitMQ broker is running you can start the Nest service using:

```
$ npm install
$ npm start
```

Test the service by sending a POST request to `http://localhost:3000/` with the following payload:

```json
{
  "name": "John Doe",
}
```

Example using `curl`:

```
curl --location 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Test"
}'
```