class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const product1 = new Product('apple', 10000) // { name: 'apple', price: 10000 }
const product2 = new Product('banana', 5000)
const product3 = new Product('melon', 15000)

class Transaction {
    #total = 0
    products = [] // [{ name: 'apple', price: 10000, qty: 3 }]

    addToCart(item, jumlah) {
        item.qty = jumlah // { name: 'apple', price: 10000, qty: 3}
        this.products.push(item)
    }

    getTotal() {
        this.products.forEach((item) => {
            this.#total += item.price * item.qty
            console.log(`${item.name} x ${item.qty} = ${item.price * item.qty}`)
        })
        console.log('-------------------------')
        console.log(`Total : ${this.#total}`)
    }

    checkout(money) {
        if (money < this.#total) {
            throw new Error("Uang anda tidak cukup")
        } else {
            // this.getTotal()
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`)
            console.log(`--- thank you ---`)
        }
    }
}

const transaction1 = new Transaction()

transaction1.addToCart(product1, 3) 
transaction1.addToCart(product3, 1)
transaction1.addToCart(product2, 5)
transaction1.getTotal()
transaction1.checkout(100000)

// console.log(transaction1.products)