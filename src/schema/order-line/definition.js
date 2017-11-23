module.exports = `
  type LineSupplier {
    id: ID
    name: String
  }

  type LineProduct {
    id: ID
    code: String
    name: String
    qty: Int
    price: Float
  }

  type OrderLine {
    id: ID!
    order: Int
    invoiceId: Int
    warehouse: Int
    maiId: Int
    supplier: LineSupplier
    product: LineProduct
    totalLine: Float
    createdAt: String
    updatedAt: String
  }
`;
