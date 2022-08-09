# Strapi x NextJS boilerplate

*This mono-repository is an example boilerplate of how to develop with Strapi as backend in combination with NextJS as frontend.*

## Getting Started

* `git clone https://github.com/nolliebigspin/nextjs-strapi-boilerplate.git` - Clone the repository
* `cd nextjs-strapi-boilerplate && yarn` - Install all dependencies for both repos
* `yarn dev` - Start both servers for Strapi at http://localhost:1337/admin and NextJS at http://localhost:3000
  * For better logging experience use `yarn dev:strapi` and `yarn dev:frontend` in two different terminals
* Add a new Post to Posts in the Strapi Content Manager
* Save it + Publish it
* The frontend is already configured

**Note:** *To make sure, your post will show up at `http://localhost:3000/`, check the access rights for all posts in Strapi: `Settings` -> `Roles`(Users & Permissions) -> `Public` -> Enable Post permissions for `findOne` and `find`.*

**Here you go!**

## Used Technologies

* [Strapi](https://strapi.io/) - Headless CMS
* [NextJS](https://nextjs.org/) - Production ready React framework
* [GraphQL](https://graphql.org/) - Query language to connect frontend to backend
* [Chakra UI](https://chakra-ui.com/) - Easy to use React UI library
* [Typescript](https://www.typescriptlang.org/) - Superset of JavaScript to make development more efficient
* [GraphQL CodeGen](https://www.graphql-code-generator.com/) - Used to create Typescript types on the fly defined by GraphQL schema
* [husky](https://typicode.github.io/husky/#/) - Automatic git hooks
* [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) - Monorepo setup


## Useful Commands

* `yarn dev` - Starts frontend and backend dev envronment
  * `yarn dev:frontend` or `yarn dev:strapi` - Starts frontend or backend seperately
* `yarn format` - Formats your NextJS code with prettier
* `yarn lint` - Checks your NextJS code for eslint errors and warnings