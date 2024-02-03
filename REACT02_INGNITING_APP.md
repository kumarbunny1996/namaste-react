# REACT02_INGNITING_APP

# is the code is ready to go production

we have to bundle the files, minimize the size, optimization of image, code splitting, chunking the codes, removing the comments and console logs and comprising the files

# what is npm?

npm is `package manager` which basically manages the packages
npm is not a node package manager and does not have a `fullform`

# what is package.json?

`package.json` is basically `configures` our app to npm.
`npm` take care of the `dependencies` of our application and their `versions` using package.json

# what is bundler?

`Bundler` helps us to bundle the files, minimize the size, optimization of image, code splitting, chunking the codes, removing the comments and console logs, clean the code and comprising the files befor going to `production`

`webpack`, `vite` and `parcel` are the bundlers used in many applications

when we run the `create-react-app` it uses `webpack and babel` as bundler and compiler- behind the scenes

# What's the difference between tilde(~) and caret(^) in package.json?

`caret(^)` in package.json will automatically upgrade the minor versions for eg: ^2.8.3 to 2.8.5
`tilde(~)` in package.json will automatically upgrade the major versions for eg: ^2.8.3 to 3.8.5

if u want to maintain exact version remove the caret or tilde;

Always safe to use `caret(^)` instead of `tilde(~)` because when packages are upgraded to major version means the application can break due to major changes in package...

# what is package-lock.json?

`package-lock.json` keeps a track of exact information or records of version that is being installed in package.json

`integrity` in packag-lock.json has `sha512-hash` to verify whatever in machine has the same version which deployed in production

`engines` is a field in the package-lock.json file that specifies the versions of `node` and `npm` used by the application. This field is useful when `deploying` the application on cloud platforms like `Heroku or Google Cloud`

# what is node_modules?

`node_modules` is a databases which contains all the npm packages which we installed

`transitive dependency` is inderiect dependency for eg- our project need parcel as dev dependenecy but parcel itself is a project which has package.json need other dependenec and goes on...

# what is npx?

`NPX` is a `package executer`, and it is used to execute javascript packages directly, without installing them.

# why CDN links are not preferred way to bring package in our application?

it is costly operation of hitting network request.
have to update the links whenever the package is upgraded.

# Browser scripts cannot have imports or exports, why this error is throwing?

normal script tag dosent supports the import or exports it only knows the javascript files, so we have to tell the script tag this app.js is not a normal browser file it is module.

add the attribute `type=module` to the script tag... so script tag understands the file is module
