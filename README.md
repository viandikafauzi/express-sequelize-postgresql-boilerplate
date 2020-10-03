# Express, Sequelize, and PostgreSQL boilerplate!

### Requirement
Require [Node.js](https://nodejs.org/) and PostgreSQL to run.

### Database connection

Make sure to edit **config.json** configuration file located in /config folder. Create "game" table in your databse if you haven't do so.

### Installation

Install the dependencies, run sequelize migrate and seeder, and you're good to go!

```sh
$ npm install
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
$ npm start
```
