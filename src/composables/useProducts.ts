import { AppRepositories } from "@/repositories/appRepositories";
import { Product } from "@/repositories/productRepository";
import { ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

export function useProducts(
  appRepositories?: Pick<AppRepositories, "productRepository">
) {
  const { productRepository } = appRepositories ?? useAppRepositories();
  const products = ref<Product[]>([]);

  const syncProducts = () => {
    productRepository.getProducts().then((data) => {
      products.value = data;
    });
  };

  syncProducts();
  return { products };
}
