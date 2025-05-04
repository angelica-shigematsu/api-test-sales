import database from "../database/connect.js";

export default class SalesController {
  
  create = async (products) => {

    const dateSale = new Date();

    let sql = 'INSERT INTO db_sales_semeq.sales(date_sale, total_price, cod_number) VALUES (?,?,?);'
    let values = [dateSale, totalPrice, codNumber];
    const connection = await database.getConnection();
      
    await database.execute(sql, values);

    let salesId = this.getSaleId;

    this.addProductsInSale(products, salesId[0].id);
  }

  addProductsInSale  = async (products, salesId) => {
    let sql = 'INSERT INTO db_sales_semeq.sales_product(product_id, sales_id) VALUES (?,?);';

    for(let product of products){
      values = [product, salesId[0].id];
      await database.execute(sql, values);
    }
  }

  getSaleId = async (codNumber) => {
    sql = 'SELECT id FROM db_sales_semeq.sales WHERE cod_number = ?'
    values = [codNumber];
      
    return await database.execute(sql, values);
  }
}
