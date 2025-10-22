// CVSection.tsx
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "motion/react";
import AttachmentIcon from "@mui/icons-material/Attachment";

import cvProduktagare from "../assets/pdf/CV - Head of Product  Digitaliseringschef [Sv - 2025-10-22].pdf";
import cvProduktagareEng from "../assets/pdf/CV - Head of Product Digitalization Manager [Eng - 2025-10-22].pdf";

const CVSection = () => {
  const cvs = [
    {
      title: "CV [Sv] - Head of Product / Digitaliseringschef",
      file: cvProduktagare,
    },
    {
      title: "CV [Eng] - Head of Product / Head of Digitalization",
      file: cvProduktagareEng,
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const MotionBox = motion.create(Box);

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      id="CV"
      sx={{ px: 4, py: 8 }}
    >
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        CV
      </Typography>

      <Stack direction={isSmallScreen ? "column" : "row"} spacing={4} justifyContent="center">
        {cvs.map((cv) => (
          <Box
            key={cv.title}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#f5f5f5",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ wordBreak: "break-word" }} gutterBottom>
              {cv.title}
            </Typography>
            <Button variant="contained" color="success" href={cv.file} download startIcon={<AttachmentIcon />}>
              Download
            </Button>
          </Box>
        ))}
      </Stack>
    </MotionBox>
  );
};

export default CVSection;
