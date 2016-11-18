WIP: reactomikit
================

Access on the browser an auto-generated kitchen sink of your React components!

Hot Code Reloading included!

## Installation
```
$ npm install -g reactomikit
```

## Usage
```
$ uikit -a ./components -p 3010
```

Access http://localhost:3010

This will start a server on the specified port that displays the kitchen sink of all the marked components under the given directory.

## JSDocs

Mark the components you want to display using the following JSDoc format.

Only components containing the `@uikit` variable will be considered. 
 
```javascript
/**
 * @uikit MyComponentName
 * @import MyComponentImport // (named or default)
 * @description
 * Some description of that this does
 * 
 * @category Core
 */
```

## Shell arguments
|Description  |Parameter       |
|-------------|----------------|
|Sets the port|`-p` or `--port`|
|Sets the components path|`-a` or `--path`|


## TODO
* Bugfixing when running the standalone `uikit` command.
* Include propTypes analysis
* Tests
