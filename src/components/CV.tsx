// CVSection.tsx
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
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
                <Typography variant="h4">{cv.title}</Typography>
                <Button variant="contained" color="success" href={cv.file} download sx={{ mt: 2 }}>
                  Ladda ner PDF
                </Button>
                <Divider sx={{ pb: "10px" }} />
                <embed
                  src={cv.file}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  style={{ borderRadius: "8px", marginBottom: "1rem" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CVSection;
