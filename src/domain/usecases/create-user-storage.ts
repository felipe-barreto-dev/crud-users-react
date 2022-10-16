import { UserModel } from '../model/user-model';

export interface CreateUserStorage {
  create: (key: string, content: UserModel) => void;
}
