class product{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
}
class Transaction {
    constructor(){
        this.total = 0;
        this.productcut =[];
    }
    add(product, quantity){
        this.productcut.push({
            product: product,
            quantity :quantity,
            subtotal : product.price * quantity
        });
        for (let item of this.productcut){
            this.total += item.subtotal
        }
    }
    show(){
        return this.total
    }
    finish(){
        return {
            product: this.productcut,
            total: this.total
        }

    }
} 
meat = new product("chiken leg", 2500)
drink = new product("cola",10000 )

let transaction1 = new Transaction()
transaction1.add(meat, 2)
transaction1.add(drink, 2)

console.log(transaction1)
