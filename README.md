# reactomikit
Atomic, Reusable, Crossplatform and Extensible minimal UI Kit built with React

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
