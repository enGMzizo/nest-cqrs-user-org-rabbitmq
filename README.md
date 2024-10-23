## Setup

To run the project, be sure to spin up the necessary RabbitMQ container using:

````bash
docker compose up -d
````

Once the RabbitMQ broker is running you can start the Nest service using:

```bash
$ npm install
$ npm start
```

Test the service by sending a POST request to `http://localhost:3000/users` with the following payload:

```json
{
  "name": "John Doe",
}
```

Example using `curl`:

```bash
curl --location 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Test"
}'
```

It should reflect in the logs.

```bash
User registered: { id: '12', name: 'Test' }
Received Event UserRegisteredEvent { id: '12', name: 'Test' }
User added to organization

```