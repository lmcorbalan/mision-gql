const {Logger, MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/mision';

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  // Logger.setCurrentLogger((msg, state) => {
  //   console.log(`MONGO DB REQUEST: ${msg}`);
  // });
  // Logger.setLevel('debug');
  // Logger.filter('class', ['Cursor']);

  return {
    Accounts: db.collection('accounts'),
    Categories: db.collection('categories'),
    Circles: db.collection('circles'),
    Orders: db.collection('orders'),
    OrdersLines: db.collection('ordersLines'),
    Products: db.collection('products'),
    Purchases: db.collection('purchases'),
    Sectors: db.collection('sectors'),
    Statuses: db.collection('statuses'),
    Suppliers: db.collection('suppliers'),
    Users: db.collection('users'),
  };
}
