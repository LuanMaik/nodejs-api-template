async function productApplyDiscount({idProduct, discountPercentage}, {productRepository}) {
    let [error, product] = await productRepository.getById(idProduct);
    if(error) {
        return ["Product not found", null];
    }
    product.applyDiscount(discountPercentage);
    let [errorUpdate, productUpdated] = await productRepository.update(product);
    return (errorUpdate)
        ? ["Error on update product", null]
        : [null, productUpdated];
}

module.exports = productApplyDiscount;