# Strapi x NextJS boilerplate

*This repository is an example boilerplate of how to develop with Strapi as backend in combination with NextJS as frontend. To get the best developer experience use [VSCode Remote Containers](https://code.visualstudio.com/docs/remote/containers) to make use of a preconfigurated mysql database used by Strapi.*


## Used Technologies

* [Strapi](https://strapi.io/) - Headless CMS
* [NextJS](https://nextjs.org/) - Production ready React framework
* [GraphQL](https://graphql.org/) - Query language to connect frontend to backend
* [Chakra UI](https://chakra-ui.com/) - Easy to use React UI library
* [Typescript](https://www.typescriptlang.org/) - Superset of JavaScript to make development more efficient
* [GraphQL CodeGen](https://www.graphql-code-generator.com/) - Used to create Typescript types on the fly defined by GraphQL schema
* [husky](https://typicode.github.io/husky/#/) - Automatic git hooks


## Useful commands

* `yarn dev` - Starts frontend and backend dev envronment (to start only one environment, use `dev:strapi` or `dev:frontend`)
* `yarn backup-db` - Backups a snapshot of the mysql database
* `yarn restore-db` - Restores database from backup file
* `yarn format` - Formats your NextJS code with prettier
* `yarn lint` - Checks your NextJS code for eslint errors and warnings