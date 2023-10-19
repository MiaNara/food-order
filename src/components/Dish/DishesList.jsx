import React from "react";
import DishItem from "./DishItem";
import "./DishesList.css";
import { Card, Container } from "@mui/material";
export default function DishesList(props) {
  if (props.items.length === 0) {
    return <h2 className="dishes-list__fallback">Found no dishes.</h2>;
  }

  return (
    <Container>
      <ul className="dishes-list">
        {props.items.map((dish) => (
          <DishItem
            key={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </ul>
    </Container>
  );
}
