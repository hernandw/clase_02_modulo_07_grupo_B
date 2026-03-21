import { findAll } from "../models/productModel.js";
import path from "path";
const __dirname = path.resolve();

const getHomePage = async (req, res) => {
  try {
    const products = await findAll();
    res.render("home", {
      pageTitle: "Inicio",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar inicio");
  }
};

const getAboutPage = (req, res) => {
  try {
    res.render("about", {
      pageTitle: "Quienes Somos",
    });
  } catch (error) {
    console.log(error);
  }
};
/* const getAboutPage = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
  } catch (error) {
    console.log(error);
  }
}; */

const getContactPage = (req, res) => {
  try {
    res.render("contact", {
      pageTitle: "Contacto",
    });
  } catch (error) {
    console.log(error);
  }
};

export { getHomePage, getAboutPage, getContactPage };
