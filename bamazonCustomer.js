var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root", 
    password: "root", 
    database: "bamazon_db"
});

function displayTable() {
    connection.query('SELECT * FROM Products', function(error, response) {
        if (error) { console.log(error) };
        var productTable = new Table({
            head: ['Item#', 'Product Name', 'Department Name', 'Price', 'Quantity'],
            colWidths: [8, 25, 27, 8, 5]
        });

        for (i = 0; i < response.length; i++) {
            productTable.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
            );
        }
        console.log(productTable.toString());
        userProductSelection();
    });
};

function userProductSelection() {
    inquirer.prompt([

        {
            name: "ID",
            type: "input",
            message: "Welcome. Select the item number of the product you want purchase."
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of those would you like to purchase?"
        },

    ]).then(function(answers) {
        var quantityWanted = answers.Quantity;
        var itemIDSelected = answers.ID;
        userSelectedPurchase(itemIDSelected, quantityWanted);
    });
}; 

function userSelectedPurchase(ID, quantityWantedByUser) {
    connection.query('SELECT * FROM Products WHERE item_id = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        if (quantityWantedByUser <= response[0].stock_quantity) {
            var totalCost = response[0].price * quantityWantedByUser;
            console.log("Your total cost for " + quantityWantedByUser + " " + response[0].product_name + " is " + totalCost + ".");
            connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + quantityWantedByUser + ' WHERE item_id = ' + ID);
        } else {
            console.log("Sorry, we are out of stock of the " + response[0].product_name + " . Come back another time.");
        };
        displayTable();
    });
};

displayTable();