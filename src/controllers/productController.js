import pool from "../config/db.js";
import { findAll, findById, create } from "../models/productModel.js";



const getProductPage = async(req, res)=>{
  try {
    const products = await findAll()
    res.render('products', {
      pageTitle: 'Productos',
      products
    })
  } catch (error) {
    onsole.error(error);
    res.status(500).send("Error al cargar productos");
  }
}


const getEditProductForm = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await findById(id);

    if (!product) {
      return res.status(404).render("notFound");
    }

    res.render("product-form", {
      pageTitle: "Editar Producto",
      formTitle: "Editar Producto",
      action: `/productos/editar/${product.id}`,
      product,
      isEdit: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar edición");
  }
};

const createProduct = async(req, res)=>{
  try {
    const { name, description, price, image_url} = req.body
    await create(name, description, price, image_url)
    res.send('Producto Agregado')
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear producto");
  }
}

export { getEditProductForm, createProduct, getProductPage };
