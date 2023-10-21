import { Button, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./ItemModal.css";

function ItemModal(props) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [amount, setAmount] = useState(props.amount);
  const handleIncreseAmount = () => {
    addToCart({ ...props, amount: 1 });
    setAmount(amount + 1);
  };
  const handleDecreaseAmount = () => {
    removeFromCart(props.id);
    setAmount(amount - 1);
  };

  return (
    <Grid container className="modal-item">
      <Grid item md={3} xs={6}>
        <img src={props.image} alt={props.name} />
      </Grid>
      <Grid item md={5} xs={6}>
        <p>{props.name}</p>
        <p className="dish-item__price">${props.price}</p>
      </Grid>
      <Grid item md={3} xs={12} className="modal-item__amount">
        <Button onClick={handleDecreaseAmount}>
          <i class="fa-solid fa-minus"></i>
        </Button>
        <input value={amount} disabled type="number" />
        <Button onClick={handleIncreseAmount}>
          <i class="fa-solid fa-plus"></i>
        </Button>
      </Grid>
    </Grid>
  );
}
export default ItemModal;
