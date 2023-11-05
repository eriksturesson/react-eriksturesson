import React, { useState, useEffect } from "react";
import "./css/App.css";
import eldstad from "./videos/eldstad.mp4";
import { Box, Container, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingSpinner } from "./LoadingSpinner";

const headerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const videoStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textOverlayStyle: React.CSSProperties = {
  padding: "20px",
  position: "relative",
  display: "flex", // Center content both horizontally and vertically
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const arrowStyle: React.CSSProperties = {
  fontSize: 48,
  animation: "bounce 4s infinite",
};

function Header() {
  return (
    <Box id="header" style={headerStyle}>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={eldstad} type="video/mp4" />
      </video>
      <Box style={textOverlayStyle} color={"white"}>
        <Container>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            VÄLKOMMEN!
          </Typography>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Vem är jag?
          </Typography>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Ta en titt!
          </Typography>
        </Container>
        <Box>
          <KeyboardArrowDownIcon style={arrowStyle} />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
