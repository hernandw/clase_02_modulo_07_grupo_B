import express from "express";
import path from "path";

const __dirname = path.resolve();

console.log(__dirname);

const app = express();

const PORT = process.env.PORT || 3010;

//Static Public
app.use(express.static(path.join(__dirname, "src/public")));

//Midlewares

//configuración de handlebars

//Rutas

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
