import {UserModel} from "./user.model";
import {OrderItemModel} from "./order-item.model";

export interface OrderDetailsModel {
  "id": number,
  "total": number
  "user": UserModel,
  "orderItemsList": OrderItemModel[]
}
