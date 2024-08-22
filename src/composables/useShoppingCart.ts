import { AppRepositories } from "@/repositories/appRepositories";
import {
  Quantity,
  ShoppingCart,
  ShoppingCartOrder,
  ShoppingCartProduct,
} from "@/repositories/shoppingCartRepository";
import { computed, readonly, ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

const shoppingCart = ref<ShoppingCart>([]);
let initialSyncDone = false;

/** The Shopping cart contains shopping cart orders */
export function useShoppingCart(
  appRepositories?: Pick<AppRepositories, "shoppingCartRepository">
) {
  const { shoppingCartRepository } = appRepositories ?? useAppRepositories();

  const syncShoppingCart = () => {
    shoppingCartRepository.getShoppingCart().then((data) => {
      initialSyncDone = true;
      shoppingCart.value = data;
    });
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

  const totalQuantity = computed(() => {
    return shoppingCart.value.reduce((acc, order) => {
      return acc + order.quantity;
    }, 0);
  });

  const totalPrice = computed(() => {
    return shoppingCart.value.reduce((acc, order) => {
      return acc + order.quantity * order.price;
    }, 0);
  });

  if (!initialSyncDone) syncShoppingCart();
  return {
    shoppingCart: readonly(shoppingCart),
    refetch: syncShoppingCart,
    getShoppingCartProductQuantity,
    updateShoppingCartOrder,
    totalQuantity,
    totalPrice,
  };
}
