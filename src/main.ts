import { createApp } from "vue";
import App from "./App.vue";
import { appRepositoriesSymbol } from "./composables/useAppRepositories";
import { AppRepositories } from "./repositories/appRepositories";
import { inMemoryProductRepository } from "./repositories/inMemoryProductRepository";
import { InMemoryShoppingCartRepository } from "./repositories/inMemoryShoppingCartRepository";
import "./style.css";

const app = createApp(App);
const appRepositories: AppRepositories = {
  productRepository: inMemoryProductRepository,
  shoppingCartRepository: new InMemoryShoppingCartRepository(),
};
app.provide(appRepositoriesSymbol, appRepositories);
app.mount("#app");
