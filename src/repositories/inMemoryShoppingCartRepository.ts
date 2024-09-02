import { ShoppingCart, ShoppingCartOrder } from "./shoppingCartRepository";

export class InMemoryShoppingCartRepository {
  shoppingCart: ShoppingCart = [];

  async getShoppingCart(): Promise<ShoppingCart> {
    return [...this.shoppingCart];
  }

  async updateShoppingCartOrder(shoppingCartOrder: ShoppingCartOrder) {
    const findedOrder = this.shoppingCart.find(
      (order) => order.id === shoppingCartOrder.id
    );

    if (findedOrder) {
      findedOrder.quantity = shoppingCartOrder.quantity;
    } else {
      this.shoppingCart.push(shoppingCartOrder);
    }

    this.shoppingCart = this.shoppingCart.filter((order) => order.quantity > 0);
  }

  async cleanShoppingCart() {
    this.shoppingCart = [];
  }
}
