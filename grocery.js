// Gabriel Wersebe
// Assignment 1
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    Grocery.createGroceries = function () {
        var groceries = [];
        groceries.push(new Grocery("Milk", 1, 3.99));
        groceries.push(new Grocery("Eggs", 2, 2.99));
        groceries.push(new Grocery("Bread", 2, 2.49));
        groceries.push(new Grocery("Ice Cream", 1, 2.99));
        return groceries;
    };
    return Grocery;
}());
