module.exports = {
  id: root => root._id || root.id,
  lines: async (root, data, {mongo: {OrdersLines}}) => {
    let lines = root.lines;
    if (!lines) {
      lines = await OrdersLines.find({order: root.oldId}).toArray();
    }

    return lines;
  },
};
