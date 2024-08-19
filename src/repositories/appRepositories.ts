import { ProductRepository } from "./productRepository";
import { ShoppingCartRepository } from "./shoppingCartRepository";

export interface AppRepositories {
  productRepository: ProductRepository;
  shoppingCartRepository: ShoppingCartRepository;
}
