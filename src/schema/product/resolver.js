module.exports = {
  id: root => root._id || root.id,
  supplier: async (root, data, {dataloaders: {supplierLoader}}) => {
    let supplier = null;
    if (root.supplier) {
      supplier = await supplierLoader.load(root.supplier);
    }

    return supplier;
  }
};
