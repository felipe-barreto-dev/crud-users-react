import { LocalStorage } from '@/data/protocols';
import { UserModel } from '@/domain/model/user-model';

export class LocalStorageAdapter implements LocalStorage {
  create(key: string, value: UserModel) {
    let currentData = JSON.parse(localStorage.getItem(key)) ?? [];
    currentData.push(value);
    localStorage.setItem(key, JSON.stringify(currentData));
  }
  read(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  update(key: string, value: UserModel) {
    let currentData = JSON.parse(localStorage.getItem(key));
    if (!currentData) return;
    let itemToUpdate = currentData.filter((i) => i.id === value.id);
    if (!itemToUpdate) return;
    currentData[currentData.indexOf(itemToUpdate)] = value;
    localStorage.setItem(key, JSON.stringify(currentData));
  }
  delete(key: string, value: UserModel) {
    let currentData = JSON.parse(localStorage.getItem(key));
    if (!currentData) return;
    let updatedData = currentData.filter((i) => i.id !== value.id);
    localStorage.setItem(key, JSON.stringify(updatedData));
  }
}
