import { CategoryModel } from "../../../../database/model/Category";

export default {
  async create(args: any, context: any, info: any) {
    const { data } = args;

    if (data.name.length == 0) throw new Error("name cant be empty");

    let category = await CategoryModel.create({
      name: data.name,
    });

    return category?.toJSON();
  },
};
