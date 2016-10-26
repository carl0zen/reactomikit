# reactomikit

NOTE: This product is still under development, don't consider it near production use just yet

Minimal Atomic UI Toolkit for React and React Native

### In the quest for a minimal footprint multi-platform styling architecture

Powered by [styled-components](https://github.com/styled-components/styled-components)

![image](http://g.recordit.co/YRZfWQzYMt.gif)


## Problems of CSS

👿 Specificity
😵 Class naming is often a subjective task
😾 Global scope
🐑 Property duplication (n+1)
🔨 Hard-coded values
💆🏼 Modularity is hard

## What this kit is trying to solve?

This is an attempt to showcase the power of styled-components in a personal toolkit that

If you are tired of repeating your UI patterns all over again
Using bloated methodologies like BEM to keep your CSS modular
Want to achieve maximum reusability to increase your productivity you may find this UI kit useful.



### Ok, let's talk about styled components:

![image](http://www.threadbombing.com/data/media/2/omgwtf_eyes.gif)

This package does 1 thing amazingly, it lets us package style primitives in well encapsulated stateless functions so we can use the full power of es6 and modern css to keep our UI's simple and scalable.

🙌🙏 To the team in charge of developing this

It even supports wrapping native components as it works like a decorator so your UI can be easily swapped as your main patterns become your low level API to your UI.

Makes it easier for UI designers to build Style libraries with ease, just learn CSS and extend the kit to start building applications blazingly fast.

Give it a try

No more typing the same rule over again, just define the pattern, wrap it in a reusable function and use it wherever in your application.

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
