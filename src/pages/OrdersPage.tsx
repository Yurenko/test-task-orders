import  { useState }  from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Typography, Select, MenuItem } from "@mui/material";

import { fetchOrders } from "../api/orders";
import OrderCard from "../components/OrderCard";
import { Order } from "../types";

const OrdersPage = () => {
  const [status, setStatus] = useState("all");

  const { data: orders, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading orders</Typography>;

  const filteredOrders = status === "all" ? orders : orders.filter((order: Order) => order.status === status);

  return (
    <Container>
      <Typography variant="h4">Orders</Typography>

      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="paid">Paid</MenuItem>
        <MenuItem value="shipped">Shipped</MenuItem>
      </Select>

      {filteredOrders.map((order: Order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </Container>
  );
};

export default OrdersPage;
