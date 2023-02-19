const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const { getData } = require("./controller");
const indexRouter = require("./routes");

app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/", indexRouter);
getData();

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

http.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT);
  console.log("Listening on 5000");
});
