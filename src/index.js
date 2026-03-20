import express from "express";
import pageRoutes from './routes/pageRoutes.js'
import productRoutes from './routes/productRoutes.js'
import exphbs from 'express-handlebars'
import path from "path";

const __dirname = path.resolve();



const app = express();

const PORT = process.env.PORT || 3010;

//Static Public
app.use(express.static(path.join(__dirname, "src/public")));

//Midlewares

//configuración de handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'src/views/layouts'),
  extname: '.hbs'
}))



//Rutas
app.use('/', pageRoutes)
app.use('/', productRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
