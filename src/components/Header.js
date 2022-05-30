import { AppBar } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar
      sx={{
        minHeight: "3rem",
        justifyContent: "center",
        alignContent: "space-around",
        position: "relative",
        width: "100%",
      }}
    >
      React Informatorio
    </AppBar>
  );
};
