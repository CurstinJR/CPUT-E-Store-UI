export interface UserModel {
  id: number;
  firstName: string;
  lastName?: string;
  mobile?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
