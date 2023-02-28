const cookieParser = require("cookie-parser");
const cors = require("cors");

//require("./database");

const app = require("./app");

app.use((req, res, next) => {
  cookieParser();
  res.header(
    "Access-Control-Allow-Origin",
    /* "http://mychallengefrontend.s3-website-sa-east-1.amazonaws.com" */
    /* "http://localhost:4200" */
    "*"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  cors();
  next();
});
app.listen(process.env.PORT || 3333);
