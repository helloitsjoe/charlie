# Menubar Transit

1. Install dependencies with `npm i`
2. Run app with `npm start`
3. Click the icon in the menubar to see upcoming buses/trains

Icon and background will be green if a vehicle is arriving within your window of time, defined by `waitStart` and `waitLength` in `resources/routes.json`

Example: If it takes you 5 minutes to walk to the train, and you don't want to wait more than 5 minutes on the platform: 
```
waitStart: 5
waitLength: 5
```