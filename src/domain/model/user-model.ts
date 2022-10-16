type Base64 = string;

export type UserModel = {
  id: number;
  name: string;
  email: string;
  status: boolean;
  gender: string;
  phoneNumber: string;
  profilePicture: Base64;
};
