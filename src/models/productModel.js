import pool from "../config/db.js";

export const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
};

export const findById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  return rows[0];
};


export const create = async(name, description, price, image_url)=>{
  const query = 'INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *'
  const values = [name, description, price, image_url]
  const { rows} = await pool.query(query, values)
  return rows[0]
}