const express = require("express");

const app = express();

app.use(express.static("./dist/angular-projet-annuel-staging"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/angular-projet-annuel-staging" });
});

app.listen(process.env.PORT || 4200);

console.log(`Running on port ${process.env.PORT || 4200}`);
