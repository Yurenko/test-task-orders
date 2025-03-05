export interface Product {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  date: Date;
  status: string;
  userId: number;
  product: Product;
}
