import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = async (req: Request, res: Response) => {
  const serviceLoginReturn = await LoginService.login(req.body);
  return res.status(mapStatusHTTP(serviceLoginReturn.status)).json(serviceLoginReturn.data);
};

export default {
  login,
};