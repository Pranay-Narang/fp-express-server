# FP Express Server

## Starting Development Server

* The development server uses `nodemon` to keep an instance running while actively looking for changes on the project and restarts the server automatically
```bash
$ npm run dev
```

## Starting Production Server

* Production docker compose uses a common network labelled `fp-fetcher` for communicating with the database
```bash
$ docker network create fp-fetcher
```
* Firing up the containers
```bash
$ docker-compose up -d
```

## Project Structure

```bash
- models/ - Contains schemas and middlewares for the database interaction
- controllers/ - Contains the business logic for the routes
- routes/ - Contains the route handlers invoking the controllers
- middleware/ - Contains any exportable middleware functions
```

## Environment Variables

* [example.env](example.env) contains the necessary values which need to be used
* Either use a `.env` file in the project root or export the specified values
* In the case of utilizing a new enviornment variable for the project
    * They need to be declared in [config.js](config/config.js) with an boilerplate value
    * Specified under [example.env](example.env) with an example value

## API Documentation
* Fetch all videos
```http
GET /services/videos
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `limit` | `string` | Limit the number of results |
| `skip` | `string` | Skip specified number of results |

* Search among videos
```http
GET /services/videos/search
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `q` | `string` | **Required**. Query for searching |

## API Testing
* Utilize [this](https://transfer.sh/EXEvGD/fp-fetcher-collection.json) Postman collection to test the API

Built over my own template [repository](https://github.com/Pranay-Narang/express-service-template) for ExpressJS based services