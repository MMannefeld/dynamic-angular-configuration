# Dynamic-angular-configuration
Demonstration of different Methods for configuring an Angular application (static -> dynamic)

## How to start:
### Start the backend
start:json:server: start the json-server for the simulated API. (This is always required)

### Start the GUI with variables
start:app:prod / start:app:dev: start the GUI with data from environment.*.ts

or 

start:app:environment: start the GUI with data from environment variables

### Create the code for the OpenAPI contract

create:api:default: creates the code with default parameters from the contract. (parameters do not work with the simulated API / only for demonstration)

prepare:api:environment: creates the code with parameters from the environment variables. (does work with the simulated API) 

### Use all methods, including APP_INITIALIZER

create:bundle:appinitializer: creates the app bundle in dist

start:bundle:appinitializer: starts the http-server for serving the bundle on localhost:8080

## Further information:
Here are some great articles with detailed descriptions:  
(The code in this example App is partly based on these articles)

Use environment variables with Angular:
- [solution with a new Angualar builder](https://dev.to/chihab/announcing-ngx-env-builder-13m2)
- [technical description of the builder](https://indepth.dev/tutorials/angular/inject-environment-variables)
- [the npm package with the builder](https://www.npmjs.com/package/@ngx-env/builder)

Dynamic configuration:
- [.env.js parallel to the bundle](https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/)

APP_INITIALIZER:
- [official Angular documentation](https://angular.io/api/core/APP_INITIALIZER)  
- [interesting article with example](https://www.technouz.com/5125/changing-angular-environment-variables-at-runtime/)

Configure the App even before APP_INITIALIZER:
- [use platformBrowserDynamic](https://offering.solutions/blog/articles/2021/11/11/loading-configuration-before-your-angular-app-starts/)
- [forRoot() and APP_INITIALIZER and Provider](https://offering.solutions/blog/articles/2019/12/31/configuring-angular-libraries/)
- [use platformBrowserDynamic - article 2](https://timdeschryver.dev/blog/angular-build-once-deploy-to-multiple-environments)


