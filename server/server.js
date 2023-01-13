const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);

app.use(express.json());
const cors = require("cors");
app.use(cors());

// app.get("/", (res, req) => {
//   req.sendFile(path.join(__dirname, "/build/client/index.html"));
// });

// app.get("*", (res, req) => {
//   req.sendFile(path.join(__dirname, "/build/client/index.html"));
// });

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

http.listen(5000, () => {
  console.log("Listening on 5000");
});
