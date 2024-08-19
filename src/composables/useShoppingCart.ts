import { AppRepositories } from "@/repositories/appRepositories";
import { Product } from "@/repositories/productRepository";
import { ShoppingCart } from "@/repositories/shoppingCartRepository";
import { readonly, ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

export type Quantity = number;
type ShoppingCartify<P, T extends string> = P & {
  type: T;
  quantity: Quantity;
};
export type ShoppingCartProduct = Product;
export type ProductOrder = ShoppingCartify<Product, "product">;
export type ShoppingCartOrder = ProductOrder;

/** The Shopping cart contains shopping cart orders */
export function useShoppingCart(
  appRepositories?: Pick<AppRepositories, "shoppingCartRepository">
) {
  const shoppingCart = ref<ShoppingCart>([]);
  const { shoppingCartRepository } = appRepositories ?? useAppRepositories();

  const syncShoppingCart = () => {
    shoppingCartRepository
      .getShoppingCart()
      .then((result) => (shoppingCart.value = result));
  };

  const getShoppingCartProductQuantity = (
    shoppingCartProduct: ShoppingCartProduct
  ): Quantity => {
    let quantity = 0;

    const findedOrder = shoppingCart.value.find(
      (order) => order.id === shoppingCartProduct.id
    );
    if (findedOrder) quantity = findedOrder.quantity;

    return quantity;
  };

  const updateShoppingCartOrder = async (
    shoppingCartOrder: ShoppingCartOrder
  ) => {
    await shoppingCartRepository.updateShoppingCartOrder(shoppingCartOrder);
    return syncShoppingCart();
  };

  syncShoppingCart();
  return {
    shoppingCart: readonly(shoppingCart),
    getShoppingCartProductQuantity,
    updateShoppingCartOrder,
  };
}
