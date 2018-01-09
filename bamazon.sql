DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

use bamazon_db;

create table products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price decimal(10,2) not null,
    stock_quantity integer(5),
    primary key (item_id)
    );
    
insert into products (item_id, product_name, department_name, price, stock_quantity) values (7105, "Bamazon Period", "Electronics-Smart Device", 49.99, 95);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (12051, "Foogle House", "Electronics-Smart Device", 129.00, 101);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (2489, "Pear PCbook Wind", "Electronics-Laptops/Computers", 999.99, 87);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (4409, "Samson Nebula Z9", "Electronics-Cell Phones", 724.99, 225);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (89111, "iPear 9 Add", "Electronics-Cell Phones", 949.00, 66);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (1032, "Minismooth Exterior Sharp", "Electronics-Laptops/Computers", 699.00, 146);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (110, "Blaze TV Rod", "Electronics-Smart TV", 49.99, 111);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (6327, "Hitz Earphones", "Electronics-Headphones", 219.99, 412);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (8787, "Jordan Breeze 1", "Shoes", 185.00, 949);
insert into products (item_id, product_name, department_name, price, stock_quantity) values (11009, "Swag Lid", "Apparel", 30.99, 309);