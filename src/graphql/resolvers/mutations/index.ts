import admin from "./admin";
import auth from "./auth.mutation";
import user from "./user.mutation";

const Mutation = {
  ...admin,
  ...auth,
  ...user,
};

export default Mutation;
