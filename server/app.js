const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router");
require("dotenv").config();
require("./db/conn");
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "UPDATE", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.listen(PORT, (req, res) => {
  console.log(`Server started at Port ${PORT}`);
});
