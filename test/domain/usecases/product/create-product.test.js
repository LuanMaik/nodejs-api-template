const {createProduct} = require("../../../../src/domain/usecases/product");
const Product = require("../../../../src/domain/entities/product");
const {createFakeProductRepository} = require("./utils");


describe("Create product use case", () => {

    it('should create a new product', async () => {
        // Given
        const data = {name: 'Iphone', price: 1000};
        const fakeProductRepository = createFakeProductRepository({
            save: (product) => [null, new Product(1, product.getName(), product.getPrice())]
        })

        // When
        const [error, productCreated] = await createProduct(data, {
            productRepository: fakeProductRepository
        })

        // Then
        expect(error).toBeFalsy();
        expect(productCreated).toBeInstanceOf(Product);
        expect(productCreated.getId()).not.toBeNull();
        expect(productCreated.getName()).toEqual(data.name);
        expect(productCreated.getPrice()).toEqual(data.price);
    })

    it('should return error when repository return error on save product', async () => {
        // Given
        const data = {name: 'Iphone', price: 1000};
        const fakeProductRepository = createFakeProductRepository({
            save: () => ['fake error message', null]
        });

        // When
        const [error, productCreated] = await createProduct(data, {
            productRepository: fakeProductRepository
        })

        // Then
        expect(error).not.toBeNull();
        expect(productCreated).toBeNull();
    })


    it('should return error when repository is not provide', async () => {
        // Given
        const data = {name: 'Iphone', price: 1000};

        // When
        const [error, productCreated] = await createProduct(data, {})

        // Then
        expect(error).not.toBeNull();
        expect(productCreated).toBeNull();
    })

})