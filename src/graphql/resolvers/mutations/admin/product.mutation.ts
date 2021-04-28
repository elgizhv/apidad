import { MediaModel } from "../../../../database/model/Media";
import { ProductModel } from "../../../../database/model/Product";

export default {
  async create(args: any, context: any, info: any) {
    let { data } = args;

    if (Object.keys(data.name).length == 0)
      throw new Error("name cant be empty");
    let picture = await MediaModel.findById(data.picture);
    if (!picture?.data?.url) throw new Error("media not found");

    data.picture = picture.data;

    let product = await ProductModel.create(data);

    return product?.toJSON();
  },
  async update(args: any, context: any, info: any) {
    let { id, data } = args;

    if (Object.keys(data.name).length == 0) {
      throw new Error("name cant be empty");
    }
    if (data.picture) {
      let picture = await MediaModel.findById(data.picture);
      if (!picture?.data?.url) throw new Error("media not found");

      data.picture = picture.data;
    }
    let product = await ProductModel.findOneAndUpdate(
      { _id: id },
      { $set: data }
    );

    return product?.toJSON();
  },
  async delete(args: any, context: any, info: any) {
    let { id } = args;
    await ProductModel.deleteOneProduct({ _id: id });

    return true;
  },
};
