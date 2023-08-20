const express = require("express");
const app = express();

// Cambia el puerto para escuchar en el puerto 4567
const port = 4567;

app.get("/", (req, res) => {
  res.send("Hola, este es mi primer servidor Express!");
});

// Añade una nueva ruta para /yo
app.get("/yo", (req, res) => {
  res.send("¡Hola desde la ruta /yo!");
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
