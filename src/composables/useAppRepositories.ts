import { AppRepositories } from "~/repositories/appRepositories";
import { InMemoryProductRepository } from "~/repositories/inMemoryProductRepository";
import { InMemoryShoppingCartRepository } from "~/repositories/inMemoryShoppingCartRepository";

const inMemoryAppRepositories: AppRepositories = {
  productRepository: new InMemoryProductRepository(),
  shoppingCartRepository: new InMemoryShoppingCartRepository(),
};

let appRepositories: AppRepositories;

if (process.env.NODE_ENV === "development") {
  console.log("Using in-memory repositories");
  appRepositories = inMemoryAppRepositories;
} else {
  /** use real impl instead */
  appRepositories = inMemoryAppRepositories;
}

export const useAppRepositories = (): AppRepositories => {
  return appRepositories;
};
