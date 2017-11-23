module.exports = `
  type Order {
    id: ID!
    oldId: Int
    user: ID!
    circle: ID!
    purchase: ID!
    totalDiscount: Float
    total: Float
    totalProducts: Int
    invoiceNumber: Int
    invoiceDate: String
    active: Boolean
    saving: Float
    lines: [OrderLine]
    createdAt: String
    updatedAt: String
  }
`;
