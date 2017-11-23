module.exports = {
  id: root => root._id || root.id,

  parent: async (root, data, {dataloaders: {categoryLoader}}) => {
    let parent = null;
    if (root.parent) {
      parent = await categoryLoader.load(root.parent);
    }

    return parent;
  },

  children: async (root, data, {mongo: {Categories}}) => {
    let children = [];
    if (root.children && root.children.length) {
      children = await Categories.find({_id: {$in: root.children}}).toArray();
    }

    return children;
  },
};
