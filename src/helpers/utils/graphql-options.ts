import { QueryWithHelpers, Document, QueryOptions } from "mongoose";
import graphqlFields from "./graphql-fields";
import graphqlSort from "./graphql-sort";

const graphqlOptions = <T extends Document>(
  query: QueryWithHelpers<Array<T>, T, {}>,
  options: { limit: number; skip: number; order: [] }
) => {
  const { limit, skip, order } = options || {};

  let sort = graphqlSort(order);
  if (sort) query.sort(sort);

  if (limit > 0) query.limit(limit);
  if (skip > 0) query.skip(skip);
};

export default graphqlOptions;
