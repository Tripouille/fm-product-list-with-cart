import { AppRepositories } from "@/repositories/appRepositories";
import { Product } from "@/repositories/productRepository";
import { readonly, ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

const products = ref<Product[]>([]);
let initialSyncDone = false;

export function useProducts(
  appRepositories?: Pick<AppRepositories, "productRepository">
) {
  const { productRepository } = appRepositories ?? useAppRepositories();

  const syncProducts = () => {
    productRepository.getProducts().then((data) => {
      initialSyncDone = true;
      products.value = data;
    });
  };

  if (!initialSyncDone) syncProducts();
  return { products: readonly(products), refetch: syncProducts };
}
