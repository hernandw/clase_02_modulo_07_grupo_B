import { findAll } from "../models/productModel.js";

const getHomePage = async (req, res) => {
  try {
    const products = await findAll();
    res.render('home',{
      pageTitle: 'Inicio',
      products
    })
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar inicio");
  }
};

export { getHomePage };
