class Product {
    #data = {
        id: null,
        name: '',
        price: 0
    }

    constructor(id, name, price) {
        this.#data['id'] = id;
        this.#data['name'] = name;
        this.#data['price'] = price;
    }


    getId() {
        return this.#data['id'];
    }

    getName() {
        return this.#data['name'];
    }

    getPrice() {
        return this.#data['price'];
    }

    applyDiscount(percentage) {
        this.#data['price'] = this.#data['price'] * (percentage / 100);
    }

    toJSON() {
        return {...this.#data}
    }
}

module.exports = Product;