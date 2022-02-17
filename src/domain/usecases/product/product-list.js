async function productList({productRepository}) {
    const [error, products] = await productRepository.list();
    return (error)
        ? ["Error on list products", null]
        : [null, products];
}

module.exports = productList;