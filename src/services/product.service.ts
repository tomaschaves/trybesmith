import ProductModel, { ProductInputtableTypes } from "../database/models/product.model";

const createProduct = async (product: ProductInputtableTypes): Promise<unknown /*opção: colocar unknown*/> => {
  const newProduct = await ProductModel.create(product);

  return newProduct;
};


// {
//   "name": "Martelo de Thor",
//   "price": "30 peças de ouro",
//   "orderId": 4
// }

export default {
  createProduct,
};
