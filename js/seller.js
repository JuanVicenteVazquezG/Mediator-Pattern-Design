export class Seller {
    constructor(name) {
        this.name = name;
    }

    offer(article, price) {
        console.log(`We have the following article: ${article}, and we start with the price ${price}`);
    }

    sold(buyer) {
console.log(`Sold to buyer: ${buyer} `);
    }
}