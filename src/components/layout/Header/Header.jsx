import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useMemo } from "react";
import "./Header.css";
import { CartContext } from "../../../context/CartContext";
import CartModal from "../../DishModal/CartModal/CartModal";
import { useState } from "react";
export default function Header() {
  const { totalItems } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div position="static">
      <AppBar
        maxwidth="lg"
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ marginLeft: { md: "3rem" } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: '"Permanent Marker", cursive',
              fontWeight: 500,
              color: "orange",
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "1.3rem",
            }}
          >
            MEALS
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: '"Permanent Marker", cursive',
              fontWeight: 500,
              color: "orange",
              letterSpacing: ".3rem",
              // textTransform: 'capitalize',
              paddingLeft: "5rem",
              textDecoration: "none",
              fontSize: "1.3rem",
            }}
          >
            MEALS
          </Typography>
          <Box
            id="menu"
            sx={{
              flexGrow: 2,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link>Home</Link>
            <Link>Foods</Link>
            <Link>Blogs</Link>
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: { md: "15rem", xs: "1rem" } }}>
            <Button onClick={handleOpen}>
              <div id="shopping-cart">
                <i class="fa-solid fa-cart-shopping"></i> Cart
                <span>{totalItems}</span>
              </div>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <CartModal handleClose={handleClose} open={open} />
    </div>
  );
}
