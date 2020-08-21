export class Buyer {
    constructor(name) {
        this.name = name;
    }

    offer(message, buyer){
        console.log(`${buyer.name}: ${message}`)
    }
}
