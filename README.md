# RideCircle
This is complete ride sharing aap where user can seek and offer a ride. the main motive is to reduce the number of vehicle on road. It is also a eco-friendly as it reduce the polution. This webApp also useful to reduce the use of fuels as well as it is reduce the cost of our journey.

This website is full responsive.

## To see the development on any other devices

To start a local development server on multiple devices, run:

192.168.1.75 replace it with your wifi connections and don't froget to keep all device in same network.

Open json server on http://192.168.1.75:3000


```bash
ng s --o --host=192.168.1.75
json-server --watch db.json --host 192.168.1.75 --port 3000
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

## Json server

To start a Json server, run:

```bash
npm i -g json-server
json-server --watch db.json
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
