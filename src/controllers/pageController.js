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

const getAboutPage = (req, res)=>{
  try {
    res.render('about',{
      pageTitle: "Quienes Somos"
    })
  } catch (error) {
    console.log(error)
  }
}

const getContactPage = (req, res)=>{
  try {
    res.render('contact',{
      pageTitle: 'Contacto'
    })
  } catch (error) {
    console.log(error)
  }
}

export { getHomePage, getAboutPage, getContactPage};
