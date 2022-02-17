const Product = require("../../../domain/entities/product");
const ProductRepository = require("../../../domain/repositories/product-repository");

const memoryProductTable = [
    new Product(1, 'Iphone', 1000),
    new Product(2, 'IMac', 8000)
];


class InMemoryProductRepository extends ProductRepository{
    async list() {
        const products = await new Promise((resolve) => {
            resolve(memoryProductTable);
        })
        return [null, products]
    }

    async getById(idProduct) {
        const productFound = await new Promise((resolve) => {
            resolve(memoryProductTable.find(p => p.getId() === parseInt(idProduct)));
        })
        if(!productFound) {
            return ['Product not found', null];
        }
        return [null, productFound]
    }

    async save(product) {
        const productCreated = await new Promise((resolve) => {
            resolve(new Product(1, product.getName(), product.getPrice()));
        })
        return [null, productCreated]
    }

    async update(product) {
        const productUpdated = await new Promise((resolve) => {
            resolve(product);
        })
        return [null, productUpdated]
    }
}

module.exports = InMemoryProductRepository;