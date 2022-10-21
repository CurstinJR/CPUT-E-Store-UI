
export class UserModel{
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createAt: Date;
  modifiedAt: Date;

  constructor(id: number, email: string, password: string, firstName: string, lastName: string, mobile: string, createAt: Date, modifiedAt: Date) {
    this.id= id;
    this.email= email;
    this.password= password;
    this.firstName= firstName;
    this.lastName= lastName;
    this.mobile= mobile;
    this.createAt= createAt;
    this.modifiedAt= modifiedAt;
  }
}
