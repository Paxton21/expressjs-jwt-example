const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
const port = 3000;

dotenv.config();
const secretKey = process.env.SECRET_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.headers);
});

app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    return res.json({
      message: "Access granted to protected route",
      user: decoded.user,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
});

app.post("/post", (req, res) => {
  const { username, password, email } = req.body;
  const token = jwt.sign({ username, password, email }, secretKey, {
    expiresIn: "1h",
  });
  res.send(token);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});