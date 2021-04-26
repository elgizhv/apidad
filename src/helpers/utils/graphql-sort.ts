const graphqlSort = (list?: any) => {
  if (!list || !Array.isArray(list) || list.length == 0) return;

  return list.map(mapOrder);
};

const mapOrder = (order: any) => [order.field, order.type == "DESC" ? -1 : 1];

export default graphqlSort;
