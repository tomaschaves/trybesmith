import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  const product = await ProductService.createProduct(req.body);

  return res.status(201).json(product);
};

const getProducts = async (req: Request, res: Response) => {
  const products = await ProductService.getProducts();
  return res.status(200).json(products);
};

export default {
  create,
  getProducts,
};