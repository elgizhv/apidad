"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphqlSort = (list) => {
    if (!list || !Array.isArray(list) || list.length == 0)
        return;
    return list.map(mapOrder);
};
const mapOrder = (order) => [order.field, order.type == "DESC" ? -1 : 1];
exports.default = graphqlSort;
