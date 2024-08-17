export type ProductId = string;

export type Product = {
  id: ProductId;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  getProductById(id: ProductId): Promise<Product | null>;
}
