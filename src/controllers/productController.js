import pool from "../config/db.js";
import { findAll, findById } from "../models/productModel.js";

const getEditProductForm = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await findById(id);

    if (!product) {
      return res.status(404).render('notFound')
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

export { getEditProductForm };
