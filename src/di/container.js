const InMemoryProductRepository = require("../infrastructure/database/repositories/inmemory-product-repository");

/**
 * // TRANSIENT
 * get productRepository(){ return new InMemoryProductRepository() }
 *
 * // SINGLETON
 * productRepository: new InMemoryProductRepository()
 */
module.exports = {
    get productRepository(){ return new InMemoryProductRepository() },
}