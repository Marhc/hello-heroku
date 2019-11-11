const express = require("express");
const routes = require("./routes");
const port = process.env.PORT || 3434;

const app = express();

const connection = require("./connection");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão efetuada!");
  })
  .catch(err => {
    console.error("Houve um erro na conexão com a base de dados:", err);
  });

app.use(express.json());
app.use(routes);

app.listen(port);
