import { Router } from 'express';
import productController from '../controllers/product.controller';
import middlewares from '../middlewares/productValidations';

const productRouter = Router();
productRouter.post(
  '/products',
  middlewares.checkName,
  middlewares.checkNameLength,
  middlewares.checkPrice,
  middlewares.checkPriceLength,
  productController.create,
);
productRouter.get('/products', productController.getProducts);

export default productRouter;
