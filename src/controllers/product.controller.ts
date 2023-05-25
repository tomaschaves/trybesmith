import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  const product = await ProductService.createProduct(req.body);

  res.status(201).json(product);
}

export default {
  create,
};