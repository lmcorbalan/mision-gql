module.exports = `
  type Query {
    accounts: [Account!]
    categories: [Category!]!
    circles: [Circle!]!
    identitie: [Identity!]
    orders: [Order!]
    orderLines: [OrderLine!]
    products(category: ID): [Product!]
    purchases: [Purchase!]!
    sectors: [Sector!]!
    statuses: [Status!]!
    suppliers: [Supplier!]!
    users: [User!]!
    warehouses: [Warehouse!]!
  }
`;
