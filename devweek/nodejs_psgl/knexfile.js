// Update with your config settings.

module.exports = {

  //development: {
  //  client: 'sqlite3',
  //  connection: {
  //    filename: './dev.sqlite3'
  //  }
  //},

  development: {
  client: 'postgres',
  connection: "postgres://localhost:5432/swords"
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
