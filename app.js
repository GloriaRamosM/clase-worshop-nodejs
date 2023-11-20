const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

const fs = require("fs");

const PORT = 4000;

//Para que lea mis archivos public
app.use(express.static("public"));

// Configuracion ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

// CONFIGURACION LAYOUTS - y poner donde se encuentra posicionada( ya sabe que esta en vista porque arriba en ejs se lo dijimos)
app.use(expressLayouts);
app.set("layout", "layouts/layout");

// METODO OVERRIDE
app.use(express.urlencoded({ extend: false }));
app.use(methodOverride("_method"));

// RUTAS
app.use(require("./src/routes/routes"));

app.listen(PORT, () => {
  console.log(
    `corriendo el servidor en el puerto 4000 , http://localhost:${PORT}`
  );
});
