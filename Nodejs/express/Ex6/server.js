const express = require("express");
const axios = require("axios");

const app = express();
const port = 4567;

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/data");
    res.json(response.data); 
  } catch (error) {
    console.error("Error en la llamada AJAX:", error);
    res.status(500).json({ error: "Error en la llamada AJAX" });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express en http://localhost:${port}`);
});
