#WIP: reactomikit

NOTE: This product is still under development, don't consider it near production use just yet

Minimal Atomic UI Toolkit for React and React Native

In the quest for a minimal footprint multi-platform styling architecture


## installation

1. `npm i reactomikit -S`
2. Expose UI kit in your webpack configuration
```js
module.exports = {
  ...
  resolve: {
    alias: {
      "ui-kit": "reactomikit/dist/ui-kit"
    }
    ...
  },
  ...
}
```
2. Create a new route to showcase your toolkit
```jsx
import UIKit from "ui-kit/examples";

<Router>
  <Route component={ UIKit } path="ui-kit" />  
</Router>
```

3. Use it anywhere in your app:
```jsx
import { Button } from "ui-kit/button"

const LoginButton = () => (
  <Button>Some button</Button>
);

export default LoginButton
```

## Architecture

1. Layout
2. Base
3. Helpers
4. Typography
5. Animation
6. Icons
7. Settings


### Layout

This components lets us setup the elements that our app will use to render content, a sample structure of an app would be:

```js
import React from 'react';
import { App, Topbar, View, Viewport, ScrollView } from 'reactomikit/layout';

const SampleApp = () => (
  <App>
    <Topbar>The Bar</Topbar>
    <View>
      <Viewport>Some text</Viewport>
      <ScrollView width="50%" height="100vh" />
      <ScrollView width="50%" height="100vh" />
    </View>
  </App>
);

export default SampleApp;
```

Available components:
- Topbar
- Panel
- ScrollView
- View
- Viewport
- App

### Base

In this category we will place all elements that are common to all applications, things like html tags and well defined elements like a Menu or the Logo, a sample snippet of how to achieve this would be:
```js
import React from 'react';

import { Topbar } from '../layout';
import { Menu, Link, Logo } from '../base';
import logo from '../assets/logo.svg';

const TopbarExample = () => (
  <Topbar>
    <Logo src={logo} />
    <Menu>
      <Link>Theme</Link>
      <Link>Helpers</Link>
      <Link>Layout</Link>
      <Link>Typography</Link>
      <Link>Buttons</Link>
      <Link>Buttons</Link>
    </Menu>
  </Topbar>
);

export default TopbarExample;
```

Available components:
- Menu
- Button
- Link
- Logo
- Label

As of
Powered by [styled-components](https://github.com/styled-components/styled-components)

![image](http://g.recordit.co/YRZfWQzYMt.gif)


## Problems with CSS
- ⚔ Specificity battle always.
- 😵 Class naming is often a subjective task and takes time.
- 😾 Global scope causes visual regressions.
- 🐑 Property duplication (n+1), keep repeating the same rule over and over again.
- 🔨 Hard-coded values are a common pattern in most projects.
- 💆🏼 Modularity is hard to achieve.

Current Alternatives
=====================

BEM
------

#### Pros
- ❤️ Solves specificity issues
- 😊 Increases modularity
- 👌 Great for big teams
- 😉 Prevents global style leaks

#### Cons
- 😥 Relies in convention and team adaptation
- 😕 Bloats the markup
- 😦 Stylesheet size increases due to long names
- 🙅🏽 Not DRY at all
- 🎩 Feels it can be automated

ITCSS
-----------
#### Pros
- 🍻 It’s just a methodology or meta-framework
- 👍🏼 Solves specificity by ordering styles
- 💃🏻 Deals with scalability
- 💪🏼 For large projects

#### Cons
- 😞 Not well documented
- 😅 Subject to interpretation
- 😢 Still needs proper implementation
- 😓 Does not account for latest tech


CSS Modules
--------------
#### Pros
- 🤘 Local scope
- 🖖🏽 Composition
- 💯 Integrates well with everything
- ❇️ Highly reusable if well designed

#### Cons
- 🙈 Only works in JS env
- 🔧 Needs (complex) setup
- 🚜 Only a technology, not a methodology
- 👶 Still very young

Styled Components
=================
![image](http://www.threadbombing.com/data/media/2/omgwtf_eyes.gif)
### Ok, let's talk about styled components:

### JS + CSS

This package does 1 thing amazingly, it lets us package style primitives in well encapsulated stateless functions so we can use the full power of es6 and modern css to keep our UI's simple and scalable.

In other words, this is the first fully JS + CSS hybrid implementation I've seen and I have the feeling this is where things are going in terms of CSS evolution.

🙌🙏 To the team in charge of developing this

It lets us wrap native UI components in an easily swappable low-level API.

About this kit
============

This is my personal attempt to solve the problems I see in css, usually I am used to see many developers struggle to understand how to approach working with CSS.

What may be

Just define the pattern, wrap it in a reusable function if you are using javascript or load the base stylesheet to consume it in different environments.

Makes it easier for UI designers to build Style libraries with ease, just learn CSS and extend the kit to start building applications blazingly fast.



About Atomic Design
=============

Whenever approaching
### Don't think about the view, think about the pattern


# run it via npm scripts
npm run dev
# or run it directly (-w or --watch)
dev-toolkit --watch

#Generate a static build

`# Create `build`-folder with compiled files (-b or --build)
dev-toolkit --build
`
removes previous build-folder
automatically uses production-builds of React and Redux
allows for a custom vendor-bundle
extracts css from individual modules
hashes assets, including jpg, png, gif & svg-files
