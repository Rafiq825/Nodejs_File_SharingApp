const express = require("express");
const path = require("path");
const db = require("./config/db");
const files = require("./routes/files");
const show = require("./routes/show");

const app = express();
const port = 3000;

db();

app.use(express.json());
app.use(express.static("public"));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/file", files);
app.use("/file", show);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
