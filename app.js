const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = 4000;

app.use(express.static("public"));

// Configuracion ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(require("./src/routes/routes"));

app.listen(PORT, () => {
  console.log(
    `corriendo el servidor en el puerto 4000 , http://localhost:${PORT}`
  );
});
