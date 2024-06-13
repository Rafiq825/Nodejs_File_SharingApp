const express = require("express");
const db = require("./config/db");
const files = require("./routes/files");

const app = express();
const port = 3000;

db();

app.use(express.json());
// Routes
app.use("/api/file", files);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
