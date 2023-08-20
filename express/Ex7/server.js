const express = require("express");
const app = express();
const port = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const shoppingList = []; 


app.get("/items", (req, res) => {
  res.json(shoppingList);
});


app.post("/items", (req, res) => {
  const newItem = req.body;
  shoppingList.push(newItem);
  res.status(201).json(newItem);
});

app.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = shoppingList[itemId];
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Artículo no encontrado" });
  }
});


app.patch("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  shoppingList[itemId] = updatedItem;
  res.json(updatedItem);
});

// Ruta para eliminar un artículo por su ID (DELETE /items/:id)
app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;
  if (shoppingList[itemId]) {
    shoppingList.splice(itemId, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Artículo no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express en http://localhost:${port}`);
});
