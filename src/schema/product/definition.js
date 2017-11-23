module.exports = `
  type Product {
    id: ID!
    price: Float
    name: String
    remitoName: String
    description: String
    allowedAmount: Int
    image: String
    marketPrice: Float
    supplier: Supplier
    code: String
    hidden: Boolean
    saleType: Int
    order: Int
    highlight: Boolean
    outOfStock: Boolean
    pack: Int
    stock: Int
    orden_remito: Int
    cost: String
    currency: String
    margin: String
    aliquot: String
    categories: [ID]
  }
`;
