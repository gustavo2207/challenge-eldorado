require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT || "mysql",
  storage: "../../__tests__/database.sqlite",
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
};
/* module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  port: "3306",
  password: "",
  database: "datamychallenge",
  define: {
    timestamps: true,
    underscored: true,
  },
}; */
