import database from "../database/connect.js";

export default class ProductController {
  
  listById = async (productId) => {

    const sql = `SELECT p.description_name, p.amount, s.fantasy_name FROM product AS p
                  INNER JOIN supplier AS s ON p.id = s.id 
                  WEHRE p.id = ?;`

    const values = [productId]
    const product = await database.query(sql, values);

    return product;
  }

  listByDescription = async (descriptionName) => {

    const sql = `SELECT p.description_name, p.amount, s.fantasy_name FROM product AS p
                  INNER JOIN supplier AS s ON p.id = s.id 
                  WEHRE p.description_name = %?%;`

    const values = [descriptionName];
    const product = await database.query(sql, values);

    return product;
  }
}