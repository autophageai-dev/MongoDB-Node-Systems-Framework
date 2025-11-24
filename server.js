require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./db/mongo");

connectDB();

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`));
