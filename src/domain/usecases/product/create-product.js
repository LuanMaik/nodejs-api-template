const Product = require("../../entities/product");

async function createProduct({ name, price }, { productRepository }) {
    if(!productRepository) {
        return ['productRepository was not provided', null];
    }
    const product = new Product(null, name, price);
    const [error, productCreated] = await productRepository.save(product);
    return (error || !productCreated)
        ? ['Error on save product', null]
        : [null, productCreated];
}

module.exports = createProduct;