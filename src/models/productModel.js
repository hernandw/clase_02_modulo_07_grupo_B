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
