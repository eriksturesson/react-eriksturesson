import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/css/App.css";
//import backdropErikSmallScreen from "../assets/img/backdrop-erik-small-screen.jpg";
//import backdropErik from "../assets/img/backdrop-erik.jpg";
import { motion } from "motion/react";
import heroSmallScreen from "../assets/img/hero-small-screen.jpg";
import hero from "../assets/img/hero.jpg";

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
  animation: "bounce 1.5s infinite",
};

const videoStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlayBackgroundStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)", // Gray with 0.3 opacity
  zIndex: 0, // Place it behind the text
};

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleScroll = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    position: "absolute", // Use absolute positioning to overlay text on top of the image
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Fine-tune centering by adjusting from the middle
    display: windowWidth < responsiveWidthLimit ? "flex" : "flex", // Center content both horizontally and vertically
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: windowWidth < responsiveWidthLimit ? "0.5rem" : "3rem",
    textAlign: "center",
    zIndex: 2, // Place it above the overlay background
    //top: windowWidth < responsiveWidthLimit ? 0 : "", // Adjust position based on screen width
  };
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="header"
      style={headerStyle}
    >
      {/* <ResponsiveImage smallScreenImage={backdropErikSmallScreen} largeScreenImage={backdropErik} /> */}
      <img
        src={windowWidth < responsiveWidthLimit ? heroSmallScreen : hero}
        alt="Bakgrundsbild med Erik Sturesson, avslappnad bild"
        style={videoStyle}
      />
      {/* <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={eldstad} type="video/mp4" />
      </video> */}
      <Box style={overlayBackgroundStyle}>
        {/* Text overlay */}
        <Box style={textOverlayStyle} color={"white"}>
          <Container>
            <Typography
              variant={windowWidth < responsiveWidthLimit ? "h5" : "h2"}
              component={windowWidth < responsiveWidthLimit ? "h5" : "h2"}
              gutterBottom
            >
              Tech-ledare
            </Typography>

            <Typography
              variant={windowWidth < responsiveWidthLimit ? "body1" : "h4"}
              component={windowWidth < responsiveWidthLimit ? "cite" : "h4"}
              gutterBottom
            >
              Se kod, portfolio och CV
            </Typography>
          </Container>
          <Box onClick={handleScroll} style={{ cursor: "pointer" }}>
            <KeyboardArrowDownIcon style={arrowStyle} />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default Header;
