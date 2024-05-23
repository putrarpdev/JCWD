class Product {
    constructor(name, price) {
        this.productName = name
        this.price = price
    }
}

class Book extends Product {
    constructor(name, price) {
        super(name, price)
        this.author
    }

    getAuthor() {
        return this.author
    }

    setAuthor(name) {
        this.author = name
    }
}

const book1 = new Book('Book 1', 20000)

book1.setAuthor('J. R. R Tolkien')

console.log(book1)

console.log(book1 instanceof Book)