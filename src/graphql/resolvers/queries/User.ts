import { UserModel } from "../../../database/model/User";
import graphqlFields from "../../../helpers/utils/graphql-fields";

export const UserQuery = {
  user: async (parent: any, args: any, context: any, info: any) => {
    let fields = graphqlFields({ info });
    const { user } = context;
    let query = UserModel.findById(user?._id); // args.id ||
    if (fields) query.select(Object.keys(fields));
    let item = await query.exec();
    return item;
  },
};
