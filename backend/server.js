const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// console.log(process.env);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connections)
    console.log("DB connection successful");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));
