import { Product } from "./productRepository";

export type Quantity = number;
type ShoppingCartify<P, T extends string> = P & {
  type: T;
  quantity: Quantity;
};
export type ShoppingCartProduct = Product;
export type ProductOrder = ShoppingCartify<Product, "product">;
export type ShoppingCartOrder = ProductOrder;
export type ShoppingCart = ShoppingCartOrder[];

export interface ShoppingCartRepository {
    getShoppingCart(): Promise<ShoppingCart>;
    updateShoppingCartOrder(shoppingCartOrder: ShoppingCartOrder): Promise<void>;
}