import { Product, ProductId } from "./productRepository";

export class InMemoryProductRepository {
  products: Product[] = [
    {
      id: "8a1f3d31-d98b-4f3d-aab9-9ebdb662e869",
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    {
      id: "2b67205c-7a61-40cf-8439-e242f151f4ba",
      image: {
        thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
        mobile: "./assets/images/image-creme-brulee-mobile.jpg",
        tablet: "./assets/images/image-creme-brulee-tablet.jpg",
        desktop: "./assets/images/image-creme-brulee-desktop.jpg",
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
    },
    {
      id: "bb6c96d9-48e4-4119-bbdb-22d620c2370b",
      image: {
        thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
        mobile: "./assets/images/image-macaron-mobile.jpg",
        tablet: "./assets/images/image-macaron-tablet.jpg",
        desktop: "./assets/images/image-macaron-desktop.jpg",
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
    },
    {
      id: "c6bfbaf6-321c-4cb7-b332-8624b1d7b7b5",
      image: {
        thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
        mobile: "./assets/images/image-tiramisu-mobile.jpg",
        tablet: "./assets/images/image-tiramisu-tablet.jpg",
        desktop: "./assets/images/image-tiramisu-desktop.jpg",
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
    },
    {
      id: "1e96b915-af8f-4985-9b98-2a828e399e19",
      image: {
        thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
        mobile: "./assets/images/image-baklava-mobile.jpg",
        tablet: "./assets/images/image-baklava-tablet.jpg",
        desktop: "./assets/images/image-baklava-desktop.jpg",
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
    },
    {
      id: "dda7ebd1-5ca8-42c7-840a-228edb6008fa",
      image: {
        thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
        mobile: "./assets/images/image-meringue-mobile.jpg",
        tablet: "./assets/images/image-meringue-tablet.jpg",
        desktop: "./assets/images/image-meringue-desktop.jpg",
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
    },
    {
      id: "96aa00bf-123a-4096-bedc-27e8722bd464",
      image: {
        thumbnail: "./assets/images/image-cake-thumbnail.jpg",
        mobile: "./assets/images/image-cake-mobile.jpg",
        tablet: "./assets/images/image-cake-tablet.jpg",
        desktop: "./assets/images/image-cake-desktop.jpg",
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
    },
    {
      id: "ea5942d4-c2d5-44e7-8c1d-c2a200d21b0c",
      image: {
        thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
        mobile: "./assets/images/image-brownie-mobile.jpg",
        tablet: "./assets/images/image-brownie-tablet.jpg",
        desktop: "./assets/images/image-brownie-desktop.jpg",
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
    },
    {
      id: "240f22f8-033e-4c05-b98c-6e08c601eb6a",
      image: {
        thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
        mobile: "./assets/images/image-panna-cotta-mobile.jpg",
        tablet: "./assets/images/image-panna-cotta-tablet.jpg",
        desktop: "./assets/images/image-panna-cotta-desktop.jpg",
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
    },
  ];

  async getProducts() {
    return this.products;
  }
  async getProductById(id: ProductId) {
    return this.products.find((product) => product.id === id) ?? null;
  }
}
