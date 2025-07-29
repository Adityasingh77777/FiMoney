const express = require("express");
const app = express();
const db = require("./db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authRoutes = require("./Routes/authRoutes");
const productRoutes = require("./Routes/productRoutes");
const PORT = process.env.PORT || 8080;
const cors = require('cors');


app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(authRoutes);
app.use(productRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Proceed" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

