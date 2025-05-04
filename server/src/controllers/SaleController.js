import  { database } from "../database/connection.js";
import { v4 as uuidv4 } from 'uuid';

export default class SalesController {
  
  create = async (req) => {

    const { products } = req.body;

    const dateSale = new Date();

    const codNumber = uuidv4();

    let sql = 'INSERT INTO db_sales_semeq.sales(date_sale, total_price, cod_number) VALUES (?,?,?);'
    let values = [dateSale, totalPrice, codNumber];
    const connection = await database.getConnection();
      
    await database.execute(sql, values);

    sql = 'SELECT id FROM db_sales_semeq.sales WHERE cod_number = ?'
    values = [codNumber];
      
    const salesId = await database.execute(sql, values);

    sql = 'INSERT INTO db_sales_semeq.sales_product(product_id, sales_id) VALUES (?,?);';

    for(let product of products){
      values = [product, salesId[0].id];
      await database.execute(sql, values).id;
    }
     }
}