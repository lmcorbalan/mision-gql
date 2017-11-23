const {makeExecutableSchema} = require('graphql-tools');

const Account = require('./account');
const Address = require('./address');
const Category = require('./category');
const Circle = require('./circle');
const Identity = require('./identity');
const Order = require('./order');
const OrderLine = require('./order-line');
const Phone = require('./phone');
const Product = require('./product');
const Purchase = require('./purchase');
const Query = require('./query');
const Sector = require('./sector');
const Status = require('./status');
const Supplier = require('./supplier');
const User = require('./user');
const Warehouse = require('./warehouse');

const typeDefs = [
  Account,
  Address,
  Category,
  Circle,
  Identity,
  Order,
  OrderLine,
  Phone,
  Product,
  Purchase,
  Query,
  Sector,
  Status,
  Supplier,
  User,
  Warehouse,
].reduce((defs, module) => (`${defs}  ${module.definition}`), '');

const resolvers = {
  Account: Account.resolver,
  Category: Category.resolver,
  Circle: Circle.resolver,
  Identity: Identity.resolver,
  Order: Order.resolver,
  OrderLine: OrderLine.resolver,
  Product: Product.resolver,
  Purchase: Purchase.resolver,
  Query: Query.resolver,
  Sector: Sector.resolver,
  Status: Status.resolver,
  Supplier: Supplier.resolver,
  User: User.resolver,
  Warehouse: Warehouse.resolver,
};

// Generate the shcema object from your types definitions
module.exports = makeExecutableSchema({typeDefs, resolvers});
