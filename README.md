# ProductCatalogueMERN
Building Product Catalogue using MERN stack


The solution uses the MEAN stack - MongoDB, ExpressJS, Angular and NodeJs.

This solution has 2 folders - frontend and backend.

First please ensure that mongodb is up and running.
(sudo service mongod start)

To run the server go to the backend folder and first run 'npm install'. Once all the packages have been installed run the commabd 'npm run dev'.

If successfully connected, below lines will be displayed on the console,

seNewUrlParser: true } to MongoClient.connect.
Express server running on port 4000
MongoDB database connection established successfully!


After this go to the frontend folder and run 'npm install'. After all the packages have been installed run the command 'ng serve --open'. You should see below lines on the console and a web page will get open,

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
ℹ ｢wdm｣: Compiled successfully.

********************************************************************************************************************

TypeScript used, though I have used Babel for backward compatible version of JavaScript.

I have used Angular CLI for this project ( https://cli.angular.io/  ) and used below commands:


npm install -g @angular/cli

ng new frontend                                  [To create an application that already works, right out of the box]

ng serve --open                                   [Automatically opens the application in the browser]

ng add @angular/material                    [Material Design components for Angular]

ng g c components/<component-name> [For creating components]

ng g s <service-name>                       [To add service class]

