import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ color: "black" }}>
      <Badge badgeContent={cart.length} color="primary" showZero>
        <ShoppingCartOutlinedIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
