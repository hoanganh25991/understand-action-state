This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run project

	# Should install `yarn`, which helps install dependency packages much more faster than `npm`
    yarn start
    # Or
    npm start

## Action & State

This is vital to understand ACTION & STATE

	React component is "blind" view

Component itself only receive data from state, present it

What about events triggered (click, change,...) inside component, it DOES NOTHING, only 

	Apply the `ACTION` defined by store
	Where we have `FULL STATE` to make decision

Current weakness of view, when action happens, can't make decision, so have to pass data through many hierarchies to find parent X where can make decision.
Pass data through in this way make component `coupled` & redundancy effort to gather data to parent X, beside of that, when want to track which code acctually handle logic of action X, we don't know, read code, find where it pass through,.. really hard to manage.

Only one `Source of Truth` is store, action dispatched, directly pass data to store to make decision, decision made, state changed, done. Supper reliable & easily mange in this style.

### ANY ACTION IN PAGE DEFINED BY STORE
### CONTAINER JUST HELPS COMPONENT BIND ACTION TO DISPATCH

