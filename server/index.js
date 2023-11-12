const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const { getData, setKeyword, setYoutube, setMovie, setMusic, setNews, setTV } = require("./controller");
const indexRouter = require("./routes");

app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/", indexRouter);

setKeyword();
setYoutube();
setMovie();
setMusic();
setNews();
setTV();
// (async () => {
//   setKeyword();
//   setYoutube();
//   setMovie();
//   setMusic();
//   setNews();
//   setTV();
// })();

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

http.listen(process.env.PORT || 5001, () => {
  console.log("Listening on 5001");
});
