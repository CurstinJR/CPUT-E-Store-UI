export interface UserModel {
  id?: number;
  email: string;
  password?: string;
  firstName: string;
  lastName?: string;
  mobile?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
