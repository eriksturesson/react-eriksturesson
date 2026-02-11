// CVSection.tsx
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "motion/react";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const CVSection = () => {
  const cvs = [
    {
      title: "Teknisk produkt- & digitaliseringsledare / Head of Product & Digitalization Manager",
      swe: "/CV%20[SV]%20-%20Teknisk%20produkt-%20&%20digitaliseringsledare.pdf",
      eng: "/CV%20[Eng]%20-%20Head%20of%20Product%20_%20Digitalization%20Manager.pdf",
    },
    {
      title: "Fullstackutvecklare / Fullstack Developer",
      swe: "/CV%20[SV]%20-%20Erik%20Sturesson%20-%20Fullstackutvecklare.pdf",
      eng: "/CV%20[Eng]%20-%20Erik%20Sturesson%20-%20Fullstack%20developer.pdf",
    },
    {
      title: "Produktägare / Produktledare / Product Owner / Product Manager",
      swe: "/CV%20[SV]%20-%20Erik%20Sturesson%20-%20Produktägare%20_%20Produktledare.pdf",
      eng: "/CV%20[Eng]%20-%20Erik%20Sturesson%20-%20Product%20Owner%20_%20Product%20Manager.pdf",
    },
    {
      title: "Teknisk projektledare / IT-projektledare / Technical Project Manager / IT Project Manager",
      swe: "/CV%20[SV]%20-%20Teknisk%20projektledare%20%20IT-projektledare.pdf",
      eng: "/CV%20[Eng]%20-%20Technical%20Project%20Manager%20%20IT%20Project%20Manager.pdf",
    },
  ];

  const theme = useTheme();
  // Anpassa grid efter skärmstorlek
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

      <Grid container spacing={4} justifyContent="center">
        {cvs.map((cv) => (
          <Grid item xs={12} sm={6} md={3} key={cv.title} display="flex" justifyContent="center">
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                minWidth: 220,
                width: "100%",
                maxWidth: 340,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ wordBreak: "break-word" }} gutterBottom>
                {cv.title}
              </Typography>
              <Box display="flex" flexDirection="row" gap={2} justifyContent="center">
                <Button variant="contained" color="success" href={cv.swe} download startIcon={<DownloadRoundedIcon />}>
                  Spara (Sv)
                </Button>
                <Button variant="contained" color="info" href={cv.eng} download startIcon={<DownloadRoundedIcon />}>
                  Save (Eng)
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default CVSection;
