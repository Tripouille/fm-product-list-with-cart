import { beforeEach, describe, expect, test } from "vitest";
import { AppRepositories } from "~/repositories/appRepositories";
import { InMemoryShoppingCartRepository } from "~/repositories/inMemoryShoppingCartRepository";
import {
  ShoppingCartOrder,
  ShoppingCartProduct,
} from "~/repositories/shoppingCartRepository";
import { useShoppingCart } from "./useShoppingCart";

let appRepositories: Pick<AppRepositories, "shoppingCartRepository">;

beforeEach(async () => {
  appRepositories = {
    shoppingCartRepository: new InMemoryShoppingCartRepository(),
  };
});

describe(useShoppingCart.name, () => {
  test("shopping cart is empty by default", async () => {
    const { shoppingCart } = useShoppingCart(appRepositories);
    expect(shoppingCart.value).toStrictEqual([]);
  });

  test("getShoppingCartProductQuantity returns 0 when the product is not in the shopping cart", async () => {
    const { getShoppingCartProductQuantity } = useShoppingCart(appRepositories);
    const shoppingCartProduct = {
      id: "0",
    } as ShoppingCartProduct;

    expect(getShoppingCartProductQuantity(shoppingCartProduct)).toBe(0);
  });

  test("getShoppingCartProductQuantity returns the right quantity", async () => {
    const { getShoppingCartProductQuantity, updateShoppingCartOrder } =
      useShoppingCart(appRepositories);
    const quantity = 5;
    const shoppingCartProduct = {
      id: "0",
      quantity,
    } as ShoppingCartOrder;
    await updateShoppingCartOrder(shoppingCartProduct);

    expect(getShoppingCartProductQuantity(shoppingCartProduct)).toBe(quantity);
  });

  test("updateShoppingCartOrder adds the order when not in the shopping cart", async () => {
    const { shoppingCart, updateShoppingCartOrder } =
      useShoppingCart(appRepositories);
    const quantity = 1;
    const shoppingCartProduct = {
      id: "0",
      quantity,
    } as ShoppingCartOrder;
    await updateShoppingCartOrder(shoppingCartProduct);

    expect(shoppingCart.value).toStrictEqual([shoppingCartProduct]);
  });

  test("updateShoppingCartOrder updates the order when already in the shopping cart", async () => {
    const { shoppingCart, updateShoppingCartOrder } =
      useShoppingCart(appRepositories);
    const initialShoppingCartProduct = {
      id: "0",
      quantity: 1,
    } as ShoppingCartOrder;
    await updateShoppingCartOrder(initialShoppingCartProduct);
    const updatedShoppingCartProduct = {
      ...initialShoppingCartProduct,
      quantity: initialShoppingCartProduct.quantity + 1,
    };
    await updateShoppingCartOrder(updatedShoppingCartProduct);

    expect(shoppingCart.value).toStrictEqual([updatedShoppingCartProduct]);
  });

  test("remove the order from the shopping cart when the quantity is 0", async () => {
    const { shoppingCart, updateShoppingCartOrder } =
      useShoppingCart(appRepositories);
    const shoppingCartProduct = {
      id: "0",
      quantity: 1,
    } as ShoppingCartOrder;
    await updateShoppingCartOrder(shoppingCartProduct);
    await updateShoppingCartOrder({
      ...shoppingCartProduct,
      quantity: 0,
    });

    expect(shoppingCart.value).toStrictEqual([]);
  });
});
