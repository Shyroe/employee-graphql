// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: "5432",
      database: "employee-var",
      password: "admin",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: "5432",
      database: "poll-var",
      password: "admin",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },
};
