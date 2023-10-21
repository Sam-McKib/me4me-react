File structure
React has suggestions for file structure
https://legacy.reactjs.org/docs/faq-structure.html

Also, atomic design can be used.
https://www.cobeisfresh.com/blog/how-atomic-design-can-make-your-life-easier#:~:text=Atomic%20design%20is%20a%20methodology,organisms%20%2D%3E%20templates%20and%20pages.

- allows for controlled construction and reusability at all levels
- improves consistency and therefore easier to maintain.

Forms
React hook form

form validation

- Formik
- Zod for validation

Libraries
lodash - utility functions
antd - Form and FormItem
Ant Design has more enterprise-level components and internationalization tools, while Material UI has more layout and grid components and a built-in theme system

Deployment
Heroku?
Vercel?

Styling

- Sass
- update package json

{
  "name": "me4me-react",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sass:compile": "node-sass src/**/*.scss -o public/css/",
    "sass:watch": "npm run sass:compile -- --watch"
  },
  "dependencies": {
    "@apollo/client": "^3.7.17",
    "@tanstack/react-table": "^8.9.3",
    "@types/node": "^20.4.1",
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "eslint": "^8.44.0",
    "eslint-config-next": "^13.4.9",
    "graphql": "^16.7.1",
    "next": "^13.4.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.45.1",
    "sass": "^1.69.4",
    "typescript": "^5.1.6"
  },
  "devDependencies": {
    "node-sass": "^9.0.0"
  }
}


Testing

- Jest

-- monorepo
This is a wip

We are truing to move server into the same repo
its difficult to have two tsconfigs
the scripts need to be conbined also

  "scripts": {
    "devv": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "start:ts": "tsc -w",
    "start:js": "nodemon dist/index.js",
    "dev": "concurrently npm:start:*"