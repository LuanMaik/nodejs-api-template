async function productById(idProduct, {productRepository}) {
    const [error, product] = await productRepository.getById(idProduct);
    return (error)
        ? ["Product not found", null]
        : [null, product];
}

module.exports = productById;