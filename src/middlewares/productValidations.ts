import { Request, Response, NextFunction } from 'express';

const checkName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  
  if (!name || name.length === 0) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  return next();
};

const checkNameLength = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  return next();
};

const checkPrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  
  if (!price || price.length === 0) {
    return res.status(400).json({ message: '"price" is required' });
  }

  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }

  return next();
};

const checkPriceLength = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }

  return next();
};

export default {
  checkName,
  checkNameLength,
  checkPrice,
  checkPriceLength,
};