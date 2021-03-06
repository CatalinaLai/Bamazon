# Bamazon
This is storefront app that will allow customers to select and purchase from the store inventory, shows the customer their total cost depending on the quantity they selected, and then updates the inventory. If there is no more of the item in stock, the app will inform the customer that there is no more in stock.

## Steps to Use App
1. A MySQL Database was created and called bamazon_db.
2. A bamazonCustomer.js file was created to access the database.
3. The user/customer can access the app through their terminal by typing in the command right below and then enter.
#### node bamazonCustomer.js
### Example
![screenshot1](https://user-images.githubusercontent.com/30578501/34743594-19d65bc8-f53f-11e7-907c-f9512d31ff23.gif)
4. The store inventory will be displayed in a table. The table will show the item id, the product name, the department name that the product is listed under, item price, and the stock quantity.
5. The app will then "Welcome" the customer and tell the customer to enter the "item#" from the table for the product they would like to purchase , push enter, then type the quantity of the item, and push enter.
### Example
![screenshot2](https://user-images.githubusercontent.com/30578501/34744073-d37e5fa2-f540-11e7-9301-aa07d0b7a182.gif)

6. Once the customer pushes enter, the app will provide the quantity the user selected, the item name, and the total cost.
7. The store inventory will be updated on the table and displayed right after the total cost is shown to the user.
### Example
![screenshot3](https://user-images.githubusercontent.com/30578501/34744564-79570ba8-f542-11e7-9071-cac24a964800.gif)
8. Finally, if the user selects a quantity of a product that's not available, the app will say "Sorry, we are out of stock of the "product name". Come back another time."
### Example
![screenshot4](https://user-images.githubusercontent.com/30578501/34745005-01fc7b0e-f544-11e7-8f02-98b702ac8bd9.gif)
![screenshot5](https://user-images.githubusercontent.com/30578501/34745295-d8c9b7b4-f544-11e7-9845-8980a75afc4f.gif)

