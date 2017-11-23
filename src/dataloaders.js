const DataLoader = require('dataloader');

async function batchCategories (Categories, keys) {
  return await Categories.find({_id: {$in: keys}}).toArray();
}

async function batchSuppliers (Suppliers, keys) {
  return await Suppliers.find({_id: {$in: keys}}).toArray();
}

module.exports = ({Categories, Suppliers}) =>({
  categoryLoader: new DataLoader(
    keys => batchCategories(Categories, keys),
    {cacheKeyFn: key => key.toString()},
  ),
  supplierLoader: new DataLoader(
    keys => batchSuppliers(Suppliers, keys),
    {cacheKeyFn: key => key.toString()},
  ),
});
