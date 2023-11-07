class product{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
}
class Transaction {
    constructor(){
        this.total = 0;
        this.cart =[];
    }
    add(product, quantity){
        this.cart.push({
            product: product,
            quantity :quantity,
            subtotal : product.price * quantity
        });
        for (let item of this.cart){
            this.total += item.subtotal
        }
    }
    show(){
        return this.total
    }
    finish(){
        return {
            product: this.cart,
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
