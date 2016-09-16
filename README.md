# Angular 2 and TypeScript Flights

A much better version, that can be easilly extended with other modules... comming here soon

Added CoreJS for Polyfills - it works in IE (almost all features)
Changed the app starting point so we can do refresh
Changed the Package scripts, for build, bundle and start
I used different css technics to display each flight item VS details for each item 

## Running the Application

1. Install [Node.js](http://nodejs.org)

2. Run `npm install` to install app dependencies

3. Run `npm start` to start the server and launch the app

## Running the Application in production

Follow 1, 2, 3 then

4. Run `npm run bundle:prod` to bundle it in /dist/bundle.min.js
    
5. Modify index.html as per comments to run the bundle

# Remove transcripts

- Run `npm run clean:tsc`

# Run unit tests

- Run `npm run test`



