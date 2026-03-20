import pool from '../config/db.js'

export const findAll = async()=>{
    const {rows} = await pool.query("SELECT * FROM products")
    return rows
}