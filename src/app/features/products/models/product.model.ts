import {ProductInventoryModel} from "./product-inventory.model";
import {ProductCategoryModel} from "./product-category.model";

export interface ProductModel {
  "id": number,
  "name": string,
  "description": string,
  "price": number,
  "createdAt": Date,
  "modifiedAt": Date,
  "productInventory": ProductInventoryModel,
  "productCategoryList": ProductCategoryModel[]
}
