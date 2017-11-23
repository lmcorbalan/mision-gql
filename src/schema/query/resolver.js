const {ObjectID} = require('mongodb');

module.exports = {
  accounts: async (root, data, {mongo: {Accounts}}) => {
    return await Accounts.find().toArray();
  },
  categories: async (root, data, {mongo: {Categories}}) => {
    return await Categories.find().toArray();
  },
  circles: async (root, data, {mongo: {Circles}}) => {
    return await Circles.find().toArray();
  },
  identitie: async (root, data, {mongo: {Identitie}}) => {
    return await Identitie.find().toArray();
  },
  orders: async (root, data, {mongo: {Orders}}) => {
    return await Orders.find().limit(10).toArray();
  },
  orderLines: async (root, data, {mongo: {OrderLines}}) => {
    return await OrderLines.find().toArray();
  },
  products: async (root, {category}, {mongo: {Products}}) => {
    let filter = {};

    if (category) {
      filter.categories = new ObjectID(category);
    }

    return await Products.find(filter).toArray();
  },
  purchases: async (root, data, {mongo: {Purchases}}) => {
    return await Purchases.find().toArray();
  },
  sectors: async (root, data, {mongo: {Sectors}}) => {
    return await Sectors.find().toArray();
  },
  statuses: async (root, data, {mongo: {Statuses}}) => {
    return await Statuses.find().toArray();
  },
  suppliers: async (root, data, {mongo: {Suppliers}}) => {
    return await Suppliers.find().toArray();
  },
  users: async (root, data, {mongo: {Users}}) => {
    return await Users.find().toArray();
  },
  warehouses: async (root, data, {mongo: {Warehouses}}) => {
    return await Warehouses.find().toArray();
  },
};
