import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductItemProps {
  product: { productId: number; quantity: number };
  onDelete: (productId: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onDelete }) => {
  return (
    <Card sx={{ marginTop: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <CardContent>
        <Typography>Product ID: {product.productId}</Typography>
        <Typography>Quantity: {product.quantity}</Typography>
      </CardContent>
      <IconButton onClick={() => onDelete(product.productId)} color="error">
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductItem;
