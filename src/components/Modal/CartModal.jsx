import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import DishItemModal from "./DishItemModal";
import "./CartModal.css";
import {
  Button,
  Card,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function CartModal({ open, handleClose }) {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Dialog open={open} onClose={handleClose} className="dialog-modal">
        <Card className="card-modal">
          {cart.map((item) => (
            <DishItemModal
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
