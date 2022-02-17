const sinon = require("sinon");
const ProductRepository = require("../../../../src/domain/repositories/product-repository");

/**
 * Example of 'overrideMethods' param value:
 *  {
 *      save: (product) => {
 *          console.log('save fake');
 *          return product;
 *      }
 *  }
 * @param overrideMethods
 * @returns ProductRepository
 */
function createFakeProductRepository(overrideMethods = {}) {
    const fakeProductRepository = new ProductRepository();
    Object.entries(overrideMethods).map(([name, fn]) => {
        sinon.stub(fakeProductRepository, name).callsFake(fn);
    })
    return fakeProductRepository;
}

module.exports = {
    createFakeProductRepository
}