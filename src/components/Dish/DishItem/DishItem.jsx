import { Button, Card, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./DishItem.css";

export default function DishItem(props) {
  const [amount, setAmount] = React.useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (event) => {
    event.preventDefault();
    const newProduct = {
      ...props,
      amount: parseInt(event.target.amount.value),
    };
    addToCart(newProduct);
    setAmount(1);
  };

  return (
    <li>
      <Card className="dish-item">
        <Grid container>
          <Grid item md={4} xs={12}>
            <div className="dish-item__image">
              <img src={props.image} alt={props.description} />
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="dish-item__price">${props.price}</div>
          </Grid>
          <Grid item md={3} xs={12} className="dish-amount__form">
            <form onSubmit={handleAddToCart}>
              <div>
                <label htmlFor="amount"> Amount</label>
                <input
                  id="amount"
                  min={1}
                  value={amount}
                  type="number"
                  onChange={(event) => {
                    setAmount(event.target.value);
                  }}
                />
              </div>
              <Button type="submit">+ Add</Button>
            </form>
          </Grid>
        </Grid>
      </Card>
    </li>
  );
}
