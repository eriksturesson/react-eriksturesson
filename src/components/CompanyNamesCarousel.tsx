import { Box, Chip, useTheme } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const CompanyNameCarousel = ({
  companyNames,
  direction,
}: {
  companyNames: string[];
  direction: "left" | "right";
}) => {
  const theme = useTheme();
  const colors = [
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.secondary.main,
  ];

  const motionRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (motionRef.current) {
      setScrollWidth(motionRef.current.scrollWidth / 2); // dela på 2 för loop
    }
  }, [companyNames]);

  const speed = 50; // pixlar per sekund
  const duration = scrollWidth / speed; // total tid för animationen

  return (
    <Box sx={{ overflow: "hidden", width: "100%", paddingTop: "1rem", paddingBottom: "1rem" }}>
      <motion.div
        ref={motionRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x: direction === "left" ? [0, -scrollWidth] : [-scrollWidth, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {companyNames.map((name, index) => {
          const color = colors[index % colors.length];
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
                  bgcolor: color,
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
