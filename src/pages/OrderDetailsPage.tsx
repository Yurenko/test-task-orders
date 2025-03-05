import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

import {
  fetchOrderDetails,
  updateOrderStatus,
  deleteProductFromOrder,
} from "../api/orders";
import ProductItem from "../components/ProductItem";
import { Product } from "../types";

const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  const { isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const data = await fetchOrderDetails(id!);
      setProducts(data.products);
      return data;
    },
  });

  const statusMutation = useMutation({
    mutationFn: () => updateOrderStatus(id!, "shipped"),
  });

  const deleteMutation = useMutation({
    mutationFn: (productId: number) => deleteProductFromOrder(id!, productId),
    onSuccess: (updatedProducts) => setProducts(updatedProducts),
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading order details</Typography>;

  return (
    <Container>
      <Typography variant="h4">Order Details</Typography>
      {products.map((product: Product) => (
        <ProductItem
          key={product.productId}
          product={product}
          onDelete={deleteMutation.mutate}
        />
      ))}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => statusMutation.mutate()}>
          Mark as Shipped
        </Button>
        <Button variant="outlined" onClick={() => navigate("/orders")}>
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default OrderDetailsPage;
