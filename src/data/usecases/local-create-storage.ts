import { CreateUserStorage } from '@/domain/usecases';
import { LocalStorage } from '@/data/protocols';
import { UserModel } from '@/domain/model/user-model';
export class LocalCreateStorage implements CreateUserStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  create(key: string, content: UserModel): void {
    this.localStorage.create(key, content);
  }
}
