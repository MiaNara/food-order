import { Button, Card, Grid } from "@mui/material";
import React from "react";
import "./DishItem.css";
export default function DishItem(props) {
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
            <form>
              <div>
                <label htmlFor="amount"> Amount</label>
                <input id="amount" min={1} defaultValue={1} type="number" />
              </div>
              <Button>+ Add</Button>
            </form>
          </Grid>
        </Grid>
        {/* <div className="dish-item__description">
          
          <div>
            
          </div>
          <div>
            <form className="dish-amount-form">
              <label htmlFor="amount"> Amount</label>
              <input id="amount" min={1} type="number" />
              <button>+ Add</button>
            </form>
          </div>
        </div> */}
      </Card>
    </li>
  );
}
