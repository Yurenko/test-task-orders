import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Order } from "../types";

interface OrderCardProps {
  order: Pick<Order, 'id' | 'status'>;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography>Order ID: {order.id}</Typography>
        <Typography>Status: {order.status}</Typography>
        <Button variant="contained" onClick={() => navigate(`/orders/${order.id}`)}>Edit</Button>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
