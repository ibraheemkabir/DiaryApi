export default {
  development: {
    username: "postgres",
    password: "root",
    database: "users",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "root",
    database: "users",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  production: {

    environment: "production",
  },
};
