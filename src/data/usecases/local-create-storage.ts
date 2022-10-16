import { CreateUserStorage } from '@/domain/usecases';
import { LocalStorage } from '@/data/protocols';

export class LocalCreateStorage implements CreateUserStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  create(key: string, content: object): void {
    this.localStorage.create(key, content);
  }
}
