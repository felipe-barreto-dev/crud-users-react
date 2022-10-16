import { UserModel } from '@/domain/model/user-model';

export interface LocalStorage {
  create: (key: string, value: UserModel) => void;
  read: (key: string) => any;
  update: (key: string, value: UserModel) => void;
  delete: (key: string, value: UserModel) => void;
}
