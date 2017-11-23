module.exports = `
  type Category {
    id: ID!
    name: String!
    description: String
    parent: Category
    children: [Category]
    products: [ID]
  }
`;
