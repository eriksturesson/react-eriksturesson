// CVSection.tsx
import { Box, Button, Card, CardContent, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "motion/react";
import cvFullstack from "../assets/pdf/cvFullstack.pdf";
import cvProduktagare from "../assets/pdf/cvProduktagare.pdf";

const CVSection = () => {
  const cvs = [
    {
      title: "CV - Produktägare",
      file: cvProduktagare,
    },
    {
      title: "CV - Fullstackutvecklare",
      file: cvFullstack,
    },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // xs och sm = true
  const MotionBox = motion(Box); // Importera motion från framer-motion
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

      <Grid container spacing={4}>
        {cvs.map((cv) => (
          <Grid item xs={12} md={6} key={cv.title}>
            <Card>
              <CardContent>
                <Typography variant="h5">{cv.title}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  href={cv.file}
                  download
                  sx={{
                    mt: 2,
                    display: isSmallScreen ? "flex" : "inline-flex",
                    justifyContent: isSmallScreen ? "center" : "flex-start",
                    mx: isSmallScreen ? "auto" : 0, // horizontal centering
                  }}
                >
                  Ladda ner PDF
                </Button>

                {!isSmallScreen && (
                  <>
                    <Divider sx={{ pb: "10px" }} />
                    <embed
                      src={cv.file}
                      type="application/pdf"
                      width="100%"
                      height="600px"
                      style={{ borderRadius: "8px", marginBottom: "1rem" }}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default CVSection;
