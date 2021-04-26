import { CategoryQuery } from "./Category";
import { ProductQuery } from "./Product";
import { UserQuery } from "./User";

const Query = {
  ...UserQuery,
  ...CategoryQuery,
  ...ProductQuery,
};

export default Query;
