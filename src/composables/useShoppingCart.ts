import { AppRepositories } from "@/repositories/appRepositories";
import {
  Quantity,
  ShoppingCart,
  ShoppingCartOrder,
  ShoppingCartProduct,
} from "@/repositories/shoppingCartRepository";
import { readonly, ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

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
