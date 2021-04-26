import { FilterQuery } from "mongoose";
import { Category, CategoryModel } from "../../../database/model/Category";
import graphqlFields from "../../../helpers/utils/graphql-fields";
import graphqlOptions from "../../../helpers/utils/graphql-options";
import graphqlTranslation from "../../../helpers/utils/graphql-translation";

export const CategoryQuery = {
  categories: async (parent: any, args: any, context: any, info: any) => {
    let fields = graphqlFields({ info });
    const { filter, options } = args;

    const filterQuery: FilterQuery<Category> = {};
    if (filter?.ids) filterQuery._id = { $in: filter.ids };
    if (filter?.name) filterQuery.name = { $regex: filter.name, $options: "i" };

    let query = CategoryModel.find(filterQuery);

    graphqlOptions(query, options);

    if (fields) query.select(Object.keys(fields));

    let list = await query.exec();
    graphqlTranslation.translate(list, context);
    return list;
  },
  category: async (parent: any, args: any, context: any, info: any) => {
    let fields = graphqlFields({ info });
    let query = CategoryModel.findById(args.id);

    if (fields) query.select(Object.keys(fields));

    let item = await query.exec();
    graphqlTranslation.translate(item, context);
    return item;
  },
};
