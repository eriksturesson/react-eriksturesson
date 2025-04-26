import { Box } from "@mui/material";
import { motion } from "motion/react";

export const LogoCarousel = ({ logos, direction }: { logos: string[]; direction: "left" | "right" }) => {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        style={{ display: "flex" }}
        animate={{
          x: direction === "left" ? ["0%", "-100%", "0%"] : ["0%", "100%", "0%"],
        }}
        transition={{
          repeat: Infinity, // Upprepa animationen
          repeatType: "loop", // Loopar animationen
          duration: 20, // Hur lång tid en cykel tar
          ease: "linear", // Linerär rörelse, ingen acceleration
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                width: "100px",
                pr: { xs: "1rem", sm: "2rem", md: "3rem", lg: "5rem" }, // Responsiv padding
                pl: { xs: "1rem", sm: "2rem", md: "3rem", lg: "5rem" }, // Responsiv padding
                height: "auto",
              }}
            >
              <img src={logo} alt={`logo-${index}`} style={{ width: "100%", height: "auto" }} />
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};
