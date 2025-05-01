

CREATE DATABASE db_sales_semeq;

CREATE TABLE db_sales_semeq.supplier(
	id INT AUTO_INCREMENT PRIMARY KEY,
    fantasy_name VARCHAR(30),
    CNPJ VARCHAR(14)
);

CREATE TABLE db_sales_semeq.product(
	id INT AUTO_INCREMENT PRIMARY KEY,
    description_name VARCHAR(30),
    amount FLOAT(8),
    supplier VARCHAR(50)
);

CREATE table db_sales_semeq.product_supplier(
	id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    supplier_id INT
);

ALTER TABLE db_sales_semeq.product_supplier ADD FOREIGN KEY (supplier_id) REFERENCES db_sales_semeq.supplier(id);
ALTER TABLE db_sales_semeq.product_supplier ADD FOREIGN KEY (product_id) REFERENCES db_sales_semeq.product(id);

CREATE table db_sales_semeq.sales_product(
	id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    sales_id INT
);

CREATE TABLE db_sales_semeq.sales(
 id INT AUTO_INCREMENT PRIMARY KEY,
 date_sale  DATETIME,
 sales_product_id INT
);
ALTER TABLE db_sales_semeq.sales_product ADD FOREIGN KEY (sales_id) REFERENCES db_sales_semeq.sales(id);

ALTER TABLE db_sales_semeq.sales_product ADD FOREIGN KEY (product_id) REFERENCES db_sales_semeq.sales(id);

ALTER TABLE db_sales_semeq.sales ADD FOREIGN KEY (sales_product_id) REFERENCES db_sales_semeq.sales_product(id);


-- Inserts from suppliers
INSERT INTO db_sales_semeq.supplier(fantasy_name, CNPJ) VALUES("Shop Lola", "12345678912345");
INSERT INTO db_sales_semeq.supplier(fantasy_name, CNPJ) VALUES("Shop Plus", "12345678912346");

-- Inserts from products
INSERT INTO db_sales_semeq.product(description_name, amount, supplier) VALUES("camiseta", 40.0, 1);
INSERT INTO db_sales_semeq.product(description_name, amount, supplier) VALUES("short", 50.0, 1);



