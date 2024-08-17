import { createApp } from "vue";
import App from "./App.vue";
import { appRepositoriesSymbol } from "./composables/useAppRepositories";
import { AppRepositories } from "./repositories/appRepositories";
import { InMemoryProductRepository } from "./repositories/inMemoryProductRepository";
import "./style.css";

const app = createApp(App);
const appRepositories: AppRepositories = {
  productRepository: InMemoryProductRepository,
};
app.provide(appRepositoriesSymbol, appRepositories);
app.mount("#app");
