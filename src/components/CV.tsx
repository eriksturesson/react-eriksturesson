// CVSection.tsx
import { Box, Button, Card, CardContent, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  return (
    <Box id="CV" sx={{ px: 4, py: 8 }}>
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
    </Box>
  );
};

export default CVSection;
