// Gabriel Wersebe
// Assignment 1

class Grocery {
    name: string;
    quantity: number;
    price: number;
    
    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    static createGroceries(): Grocery[] {
        let groceries: Grocery[] = [];
        groceries.push(new Grocery("Milk", 1, 3.99));
        groceries.push(new Grocery("Eggs", 2, 2.99));
        groceries.push(new Grocery("Bread", 2, 2.49));
        groceries.push(new Grocery("Ice Cream", 1, 2.99));
        return groceries;
    }

}
