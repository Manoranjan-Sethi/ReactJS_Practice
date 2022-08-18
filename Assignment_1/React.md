# What is React?
React is a JavaScript library for creating user interfaces mostly used for front-end in web and android applications.

# Who made React?
React was released by Facebook in 2013 and they still use it today for many of their applications

# What is Babel?
Babel is a JavaScript transpiler which converts modern JavaScript to older JavaScript versions.
Ex- es6 -> es5

# How does Babel convert html code in React into valid code?
Babel is a workhorse that ensures we can write concise and expressive React components using JSX. We just need to write normal ES6, 7, 8 code in our app.js file and run it with ‘npx babel filename’ command where ‘filename’ is replaced by app.js here, and we will get the ES5 output in the console. 

# What is ReactDOM used for? Write an example?
The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.

# What are the packages that you need to import for react to work with?
This module is distributed via npm packages.
yarn add --dev @testing-library/react
npm i React Router dom

# How do you add react to a web application?
- Step 1: Add a DOM Container to the HTML
- Step 2: Add the Script Tags
- Step 3: Create a React Component

# What is React.createElement?
React applications are usually built around a single HTML element React developers often call this the root node (root element

# What are the three properties that createElement accept?
To create a new element and add an HTML snippet to the div: to attach the div to the document, you use the appendChild() method.

# What is the meaning of render and root?
React renders HTML to the web page by using a function called render().

<div id="root"></div> This is called root.Everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node
