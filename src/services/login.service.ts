import { Optional } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import { User } from '../types/User';
import UserModel from '../database/models/user.model';

type UserInputtableTypes = Optional<User, 'id' | 'vocation' | 'level'>;

const login = async (body: UserInputtableTypes): Promise<ServiceResponse<Token>> => {
  if (!body.username || !body.password) {
    return { status: 'INVALID_DATA', 
      data: { message: '"username" and "password" are required' } };
  }

  const searchUser = await UserModel
    .findOne({ where: { username: body.username } });

  if (!searchUser || !bcrypt.compareSync(body.password, searchUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { username, password } = searchUser.dataValues;

  const token = jwtUtil.sign({ username, password });

  return { status: 'SUCCESS', data: { token } };
};

export default { login };
