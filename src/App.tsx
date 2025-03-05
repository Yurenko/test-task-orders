import { Routes, Route,Navigate  } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/orders" replace />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/:id" element={<OrderDetailsPage />} />
    </Routes>
  );
}

export default App;
