# FP Express Server

## Starting Development Server

* The development server uses `nodemon` to keep an instance running while actively looking for changes on the project and restarts the server automatically
```bash
$ npm run dev
```

## Starting Production Server

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