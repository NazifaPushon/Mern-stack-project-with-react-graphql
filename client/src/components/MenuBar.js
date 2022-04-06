import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <NavLink to="/Home" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "black" }}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "black" }}>
              Login{" "}
            </Button>
          </NavLink>
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "black" }}>
              Register{" "}
            </Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;
