# One To Many / Many To One - Pratice

`In this study case I developed a simple API to abstract a "Phone Contact List"(Name and phone number).`

`An user can have multiples contacts, these multiples contacts have only one user so I implemented one to many, many to one relationship by using TypeORM.`

## Techs and Tools

- Language:
  - TypeScript
- Code:
  - ESLint Airbnb style
- Database:
  - PostgreSQL
- TypeORM
  - Relations:
    - OneToMany/ManyToOne

### End Points

- Users
  - GET /users : Return all users in user's table.
  - POST /users : Create a user in user's table.
  - PUT /users/:id : Update a user from user's.
  - DELETE /users/:id Delete a user in users's .

- Contacts
  - GET /contacts : Return all contacts in contact's table.
  - POST /contacts : Create a contact in contact's table.
  - PUT /contacts/:id : Update a contact from contact's table.
  - DELETE /contacts/:id Delete a contact in contact's table.

#### Getting Started

> **Yarn and NPM are REQUIRED!**
>
> **A PostgreSQL Database**

- PostgreSQL
  - host: localhost
  - port: 5432
  - username: postgres,
  - password: docker,
  - database: postgres,

- Clone this repository
  - ```git clone https://github.com/cezarcozta/api-phoneList.git```

- Access project folder
  - ```cd api-phoneList```

- Install all dependencies
  - ```yarn```

- Run all migrations
  - ```yarn typeorm migration:run```

- Run the project
  - ```yarn dev:server```

- Server on localhost port 3333
  - [Localhost](http://localhost:3333)

##### Author

- César Augusto Costa
  - [cezarcozta.com](https://cezarcozta.com)
  - [Linkedin](https://www.linkedin.com/in/cezarcozta)
