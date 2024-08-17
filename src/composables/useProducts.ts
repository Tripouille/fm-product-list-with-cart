import { Product } from "@/repositories/productRepository";
import { ref } from "vue";
import { useAppRepositories } from "./useAppRepositories";

export function useProducts() {
  const { productRepository } = useAppRepositories();
  const products = ref<Product[]>([]);

  productRepository.getProducts().then((data) => {
    products.value = data;
  });
  return { products };
}
