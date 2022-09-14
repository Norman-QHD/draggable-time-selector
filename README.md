# Draggable time selector USER GUIDE

This is a web component build by TSDX @ typescript

> When you want to select start time , end time or time span,drag the pointer or click time node to set them.

> Easy to use on your React js/ts project

## Use

You have to install the package which published on npm

```bash
npm install draggable-time-selector
```
and import it at js/jsx/ts/tsx or other file

```typescript
import TimeSelector from 'draggable-time-selector'
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

## Modify or local debug
Clone this repository and goto the folder
```bash
yarn link
```

If you want to reload this component realtime on your project

```bash
yarn start
```

in order to refresh the component at dest project using area

And then goto the project folder witch you want to use this component
```bash
yarn link draggable-time-selector
```

You may fall in some errors like:

`npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: interactive-movie-script-player@0.1.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.2" from dragable-time-selector@0.1.0`


Don't worry about that, the logic of this component is very simple and there are not too many dependencies, so you can add --force argument when install this package

```bash
npm install draggable-time-selector --force
```

### If you find any problem please submit ISSUES to me and welcome to GITHUB and star [this project](https://github.com/Norman-w/draggable-time-selector)
