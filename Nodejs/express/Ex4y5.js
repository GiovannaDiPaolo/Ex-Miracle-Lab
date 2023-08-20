const express = require("express");
const app = express();

const port = 4567;

// Middleware de registro para imprimir la URL actual en la consola
const logCurrentURL = (req, res, next) => {
  console.log("URL actual:", req.url);
  next();
};

// Agregar middleware de registro a todas las rutas
app.use(logCurrentURL);

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hola, este es mi primer servidor Express!");
});

app.get("/yo", (req, res) => {
  res.send("¡Hola desde la ruta /yo!");
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
