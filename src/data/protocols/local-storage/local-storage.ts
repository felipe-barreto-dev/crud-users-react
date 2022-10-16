export interface LocalStorage {
  create: (key: string, value: object) => void;
  read: (key: string) => any;
  update: (key: string, value: object) => void;
  delete: (key: string) => void;
}
