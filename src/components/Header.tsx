import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/css/App.css";
import backdropErikSmallScreen from "../assets/img/backdrop-erik-small-screen.jpg";
import backdropErik from "../assets/img/backdrop-erik.jpg";

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

const arrowStyle: React.CSSProperties = {
  fontSize: 48,
  animation: "bounce 4s infinite",
};

const videoStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveWidthLimit = 700;

  const textOverlayStyle: React.CSSProperties = {
    padding: "20px",
    position: "relative",
    display: windowWidth < responsiveWidthLimit ? "none" : "flex", // Center content both horizontally and vertically
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //top: windowWidth < responsiveWidthLimit ? 0 : "", // Adjust position based on screen width
  };
  return (
    <Box id="header" style={headerStyle}>
      {/* <ResponsiveImage smallScreenImage={backdropErikSmallScreen} largeScreenImage={backdropErik} /> */}
      <img
        src={windowWidth < responsiveWidthLimit ? backdropErikSmallScreen : backdropErik}
        alt="Bakgrundsbild med Erik Sturesson, avslappnad bild"
        style={videoStyle}
      />
      {/* <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={eldstad} type="video/mp4" />
      </video> */}
      <Box style={textOverlayStyle} color={"white"}>
        <Container>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            VÄLKOMMEN!
          </Typography>
          {windowWidth > responsiveWidthLimit && (
            <Typography variant="h5" component="h5" align="center" gutterBottom>
              Vem är jag?
            </Typography>
          )}
        </Container>
        <Box>
          <KeyboardArrowDownIcon style={arrowStyle} />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
