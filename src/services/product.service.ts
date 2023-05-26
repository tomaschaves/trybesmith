import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const createProduct = async (product: ProductInputtableTypes): Promise<unknown> => {
  const newProduct = await ProductModel.create(product);

  return newProduct;
};

const getProducts = async (): Promise<unknown> => {
  const products = await ProductModel.findAll();
  return products;
}; 

export default {
  createProduct,
  getProducts,
};
