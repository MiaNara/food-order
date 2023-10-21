import { Button, Card, Grid } from "@mui/material";
import React from "react";
import "./DishItemModal.css";
export default function DishItemModal(props) {
  return (
    <Grid container className="modal-item">
      <Grid item md={7} xs={12}>
        <h3>{props.name}</h3>
        <div className="dish-item__price">${props.price}</div>
      </Grid>
      <Grid item md={5} xs={12} className="dish-amount__form">
        <Button size="small">-</Button>
        <input id="amount" value={props.amount} disabled type="number" />
        <Button size="small">+</Button>
      </Grid>
    </Grid>
  );
}
