# BeeFree testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Startup
- clone the repo
- sign-up for bee free and get the Client and Secret
- Replace `YOUR_CLIENT` and `YOUR_SECRET` with values
- `yarn install` - install deps
- `yarn start` - will start the app in 3000 port 

## App structure

- Main - just main component with all child component in it
- CardCmp - display templateName from the Store
- InputCmp - input update templateName to the Store
- Editor - BeeFree editor with onSave callback 

## Store structure
```js
template: {
  name: "New tempalte",
  value: 0
}
```

## Issue description

We suspect BeeFree onSave callback seem trigger old memo function. 
Because of that the callback function do not get new value from store. 

## How to Repro
- Make sure you have ReduxDevTools in the browser
- Open Dev Console in Chrome

1. Using input and button update Template name to anything, for example "New template is amazing".
2. You will notice that Template name is updated in all components and store itself
3. Click on `Save` button on the Editor. It will trigger save Callback and call parent component function for saving

If you have your console opens you will see that name property have OLD value for some reason.  



