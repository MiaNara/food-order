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
import React from "react";

export default function Header() {
  return (
    <div position="static">
      <AppBar
        maxwidth="lg"
        sx={{ boxShadow: "none", backgroundColor: "white" }}
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
              // textTransform: 'uppercase',
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
            <link>Home</link>
            <link>Foods</link>
            <link>Blogs</link>

            {/* {isAdmin && (
              <>
                <LinkStyled
                  to={"../category"}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid orange"
                        : "2px solid white",
                    };
                  }}
                >
                  Thực đơn
                </LinkStyled>
                <LinkStyled
                  to={"../addCategory"}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid orange"
                        : "2px solid white",
                    };
                  }}
                >
                  Thêm món ăn
                </LinkStyled>
                <LinkStyled
                  to={"../report"}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid orange"
                        : "2px solid white",
                    };
                  }}
                >
                  Thống kê
                </LinkStyled>
              </>
            )} */}
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: { md: "2rem", xs: "1rem" } }}>
            <Stack sx={{ color: "grey", flexDirection: "row" }}>
              {" "}
              {/* <PersonIcon fontSize="small" sx={{ paddingRight: "5px" }} /> */}
              Trang Le
            </Stack>
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: { md: "5rem" } }}>
            <Tooltip>
              <Button color="info" variant="outlined">
                Đăng xuất
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
