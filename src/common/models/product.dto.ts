import { BaseDTO } from './base.dto'

export interface Product extends BaseDTO {
  image: string,
  name: string,
  shortDescription: string,
  description: string,
  price: number
}