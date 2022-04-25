const express = require("express");
const path = require("path");
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
//importation de l'instance sequelize
const { sequelize, User } = require("./models");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  //qui peut acceder à l'API
  res.setHeader("Access-Control-Allow-Origin", "*");
  //quels headers sont autorisés
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  //quels méthodes sont possibles
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
// Gestion des principaux chemins de l'API posts, auth, images
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/posts", postsRoutes);
app.use("/api/auth", userRoutes);

//creation de tables dans notre database en fonction des models que nous avons
app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  
  console.log("Database synced");
});





module.exports = app;
