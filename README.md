# One To Many / Many To One - Pratice

```h
In this study case I developed a simple API to abstract a Phone Contact List
(Name and phone number).

An user can have multiples contacts, these multiples contacts have only one user
so I implemented one to many, many to one relationship using TypeORM.
```

## Techs and Tools

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://sqlite.org/version3.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

### End Points

- Users

  ```bash
  GET:    /users
  POST:   /users
  PUT:    /users/:id
  DELETE: /users/:id
  ```

- Contacts

```bash
  GET:    /contacts
  POST:   /contacts
  PUT:    /contacts/:id
  DELETE: /contacts/:id
```

#### Getting Started

> **Yarn and NPM are REQUIRED!**
>
> **And an instance of PostgreSQL Database(prefere Docker)**

```bash
  # PostgreSQL
  - host: localhost
  - port: 5432
  - username: postgres,
  - password: docker,
  - database: postgres,

  # Clone this repository
  $ git clone https://github.com/cezarcozta/api-phoneList.git

  # Access project folder
  $ cd api-phoneList

  # Install all dependencies
  $ yarn

  # Run all migrations
  $ yarn typeorm migration:run

  # Run the project
  $ yarn dev:server

  # Server on localhost port 3333
  $ http://localhost:3333
```

----------------------------------------------------------------------------

##### Developed by

- César Augusto Costa :sunglasses: :sunglasses: :sunglasses:
  - [cezarcozta.com](https://cezarcozta.com)
  - cezarcozta@gmail.com
  - [Linkedin/cezarcozta](www.linkedin.com/in/cezarcozta)
  - [Twitter@cezarcozta](www.twitter.com/cezarcozta)
  - [Instagram@cezarcozta](www.instagram.com/cezarcozta)
  - [Facebook/cezarcozta](www.facebook.com/cezarcozta)

###### Version 2.0

`Resource route /user/:id/contacts`
