import React from "react";
import DishItem from "../DishItem/DishItem";
import "./DishesList.css";
import { Container } from "@mui/material";
export default function DishesList(props) {
  if (props.items.length === 0) {
    return <h2 className="dishes-list__fallback">Found no dishes.</h2>;
  }

  return (
    <Container id="main">
      <ul className="dishes-list">
        {props.items.map((dish) => (
          <DishItem
            key={dish.id}
            id={dish.id}
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
