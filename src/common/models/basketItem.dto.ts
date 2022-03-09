import { Product } from "./product.dto";

export interface BasketItemDto {
  product: Product,
  count: number,
}