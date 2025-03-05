import axios from "axios";
import { Order, Product } from "../types";

const API_URL = "https://fakestoreapi.com/carts";

export const fetchOrders = async () => {
  const { data } = await axios.get(API_URL);
  return data.map((order: Order) => ({
    ...order,
    status: ["pending", "paid", "shipped"][Math.floor(Math.random() * 3)],
  }));
};

export const fetchOrderDetails = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const updateOrderStatus = async (id: string, status: string) => {
  await axios.patch(`${API_URL}/${id}`, { status });
};

export const deleteProductFromOrder = async (orderId: string, productId: number) => {
 
  const order = await fetchOrderDetails(orderId);
  const updatedProducts = order.products.filter((p: Product) => p.productId !== productId);
  await axios.delete(`${API_URL}/${orderId}`, { ...order, products: updatedProducts });
  return updatedProducts;
};
