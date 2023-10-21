import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemModal from "../ItemModal/ItemModal";
import "./CartModal.css";

export default function CartModal({ open, handleClose }) {
  const { cart, setCart, totalPrice } = useContext(CartContext);
  const handleOrder = () => {
    setTimeout(() => alert("Order successfully!"), 500);
    setCart([]);
    handleClose();
  };
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      className="dialog-modal"
    >
      <DialogTitle sx={{ fontFamily: '"Playpen Sans", cursive' }}>
        Shopping cart
      </DialogTitle>

      <Box noValidate className="card-modal">
        {cart.length !== 0 ? (
          cart.map((item) => (
            <ItemModal
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))
        ) : (
          <p className="empty-cart">
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
            <span>Your cart is empty!</span>
          </p>
        )}

        <DialogActions className="dialog-action">
          <div className="total-price">
            <p>Total: {totalPrice} </p>
          </div>
          <div>
            <Button onClick={handleClose}>Exit</Button>
            <Button onClick={handleOrder} disabled={!cart.length}>
              Order
            </Button>
          </div>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
