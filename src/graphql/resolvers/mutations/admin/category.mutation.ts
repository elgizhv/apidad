import { CategoryModel } from "../../../../database/model/Category";
import { ProductModel } from "../../../../database/model/Product";

export default {
  async create(args: any, context: any, info: any) {
    const { data } = args;

    if (Object.keys(data.name).length == 0)
      throw new Error("name cant be empty");

    let category = await CategoryModel.create({
      name: data.name,
    });

    return category?.toJSON();
  },
  async update(args: any, context: any, info: any) {
    const { id, data } = args;

    if (data.name && Object.keys(data.name).length == 0) {
      throw new Error("name cant be empty");
    }

    let category = await CategoryModel.findByIdAndUpdate(id, {
      name: data.name,
    });

    return category?.toJSON();
  },
  async delete(args: any, context: any, info: any) {
    const { id, recursive } = args;

    const category = await CategoryModel.findByIdAndDelete(id);

    if (recursive) {
      ProductModel.deleteProduct({ category: id });
    }
    return true;
  },
};
