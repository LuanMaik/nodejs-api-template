const {productList, productById, createProduct, productApplyDiscount} = require("../../domain/usecases/product");
const express = require('express');
const router = express.Router();

module.exports = function (containerDependencies) {

    router.get('/', async (req, resp) => {
        const [error, products] = await productList(containerDependencies)
        return (error)
            ? resp.status(500).json({message: 'error'})
            : resp.json(products)
    })

    router.get('/:id', async (req, resp) => {
        const [error, product] = await productById(req.params.id, containerDependencies)
        return (error)
            ? resp.status(500).json({message: 'error'})
            : resp.json(product)
    })

    router.post('/', async (req, resp) => {
        const [error, product] = await createProduct(req.body, containerDependencies)
        return (error)
            ? resp.status(500).json({message: 'error'})
            : resp.json(product)
    })

    router.put('/:id', async (req, resp) => {
        const data = {
            idProduct: req.query.id,
            discountPercentage: req.body.discountPercentage
        }
        const [error, product] = await productApplyDiscount(data, containerDependencies)
        return (error)
            ? resp.status(500).json({message: 'error'})
            : resp.json(product)
    })

    return router;
}
