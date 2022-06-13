# Post Code Search README #

# Introduction:- 
This application help search post code in uk & you will get all the information of selected post code. 
[Demo](https://jagdishmastek.github.io/postcodesearch/)

## Local setup ##
Clone the repo
`https://github.com/jagdishmastek/ipfexam.git`

CD to cloned directory
`cd path/to/directory`

Run the following commands to install dependencies
## Note ## 
You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. 
Please check the node & npm version if your machin already installed. For checking node & npm version.
Please use below mentioned command.
Node Version:- `node --version`
Npm Version:- `npm --version`
To install dependencies `npm install`


## Run application ##
* Run `new start` for preview
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Build for different environments ##
* Run build development environment `npm run build:dev`
* Run build sit environment `npm run build:sit`
* Run build uat environment `npm run build:uat`
* Run build pre production environment `npm run build:pre`
* Run build production environment `npm run build:prd`

## Test the application ##
* Run the test `npm run test`
Launches the test runner in the interactive watch mode

## Tech Stack ##
* NPM - [Download](https://nodejs.org/en/download/)
* ReactJs
* Bootstrap
* react-bootstrap
* react-router-dom
* axios
* react-redux
* redux-thunk
* pigeon-maps
* react testing-library
* redux-mock-store
* axios-mock-adapter

## API Reference

#### Get Postcode list

```http
  GET /api.postcodes.io/postcodes/${payload}
```

| Parameter  | Type     | Description                    |
| :--------- | :------- | :----------------------------- |
| `postCode` | `string` | **Required**. Name Of postcode
| `limit`    | `number` | **Optional**  limit= (not required) Limits number of postcodes matches to return. Defaults to 10. Needs to be less than 100.         

#### Get Postcode Details

```http
  GET /api.postcodes.io/postcodes/${payload}/autocomplete?limit=100
```

| Parameter     | Type     | Description                                   |
| :------------ | :------- | :-------------------------------------------- |
| `SearchValue` | `string` | **Required**. partial postcode value to fetch |
