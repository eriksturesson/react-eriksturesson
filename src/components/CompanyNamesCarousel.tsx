import { Box, Chip, useTheme } from "@mui/material";
import { motion } from "motion/react";

export const CompanyNameCarousel = ({
  companyNames,
  direction,
}: {
  companyNames: string[];
  direction: "left" | "right";
}) => {
  const theme = useTheme(); // Hämta temafärger från MUI:s tema

  // Array med olika färgtyper som vi kan använda
  const colors = [
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.secondary.main,
  ];

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x: direction === "left" ? ["0%", "-100%", "0%"] : ["-50%", "0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {companyNames.map((name, index) => {
          const color = colors[index % colors.length]; // Växla mellan färgerna i arrayen
          return (
            <Box
              key={index}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 2,
              }}
            >
              <Chip
                label={name}
                sx={{
                  fontWeight: "bold",
                  bgcolor: color, // Använd temafärg
                  boxShadow: 2,
                  borderRadius: "8px",
                  minWidth: "180px",
                  height: "50px",
                  margin: "0 8px",
                }}
              />
            </Box>
          );
        })}
      </motion.div>
    </Box>
  );
};
