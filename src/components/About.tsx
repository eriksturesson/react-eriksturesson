import GitHubIcon from "@mui/icons-material/GitHub"; // Kom ihåg att importera GitHub-ikonen
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import DescriptionIcon from "@mui/icons-material/Description";
import { useEffect, useState } from "react";
import backendErrorDocs from "../assets/img/backend-error-documentation.png";
import errorDrawingsDocs from "../assets/img/error-drawing-documentation.png";
import { aboutData, aboutData2 } from "../data/aboutItems";
import LanguageIcon from "@mui/icons-material/Language";
import { LogoCarousel } from "./LogoCarousel";

export default function About() {
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
  const MotionBox = motion.create(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
    >
      <Grid container width="100%" spacing={2} px={2} py={2} textAlign={"center"} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant={windowWidth < responsiveWidthLimit ? "h4" : "h2"}
            component={windowWidth < responsiveWidthLimit ? "h4" : "h2"}
          >
            Produktägare | Fullstack utvecklare
          </Typography>
          <Typography variant="body1" component="cite">
            Bygger och leder produktlösningar som skapar affärsvärde och gör idéer till verklighet.
          </Typography>
          <LogoCarousel logos={[...aboutData, ...aboutData2, ...aboutData, ...aboutData2]} direction="left" />
          <Typography variant="h5" component="h5">
            Grundade och ledde Student Node AB, ett SaaS-företag som blev uppköpt av Poolia 2019. Specialiserad på att
            skapa tekniska lösningar som möter både affärs- och användarbehov.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="info"
            href={"https://www.linkedin.com/in/eriksturesson"}
            target="_blank"
            startIcon={<LinkedInIcon />}
          >
            Besök min LinkedIn
          </Button>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Typography
            variant={windowWidth < responsiveWidthLimit ? "h4" : "h2"}
            component={windowWidth < responsiveWidthLimit ? "h4" : "h2"}
          >
            Publik kod
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Event Landing pages
          </Typography>

          <Typography component={"cite"}>
            Skalbart, modernt, mobilanpassat eventsystem inklusive admin inloggning. Används av Stockholm City
            Affärsnätverk
          </Typography>
          <Box>
            <Button
              sx={{ margin: 1 }}
              startIcon={<LanguageIcon />}
              variant="contained"
              color="info"
              href="https://stockholmcityaffarsnatverk.se"
              target="_blank"
            >
              Stockholm City Affärsnatverk
            </Button>
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              color="success"
              href={"https://github.com/eriksturesson/EventLandingPages"} // Byt ut denna URL med rätt GitHub-repository-länk
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              Event Landing Pages
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">NPM Paket</Typography>
          <Typography component="cite">Paket för utvecklare i NodeJS / TypeScript</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={5}>
            <CardMedia sx={{ objectFit: "cover" }} component="img" image={backendErrorDocs} alt="backend error docs" />
            <CardContent>
              <Typography variant="h3" component="h3">
                backend-error
              </Typography>
              <Box mb={1}>
                <img
                  style={{ width: 200 }}
                  src="https://img.shields.io/npm/dy/backend-error?style=flat-square"
                  alt="npm downloads"
                />
              </Box>
              <Box mb={2}>
                <img src="https://img.shields.io/npm/v/backend-error?style=flat-square" alt="npm version" />
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                sx={{ margin: 1 }}
                startIcon={<DescriptionIcon />}
                variant="contained"
                color="error"
                href="https://www.npmjs.com/package/backend-error"
                target="_blank"
              >
                Till NPM
              </Button>
              <Button
                sx={{ margin: 1 }}
                variant="contained"
                color="success"
                href="https://github.com/eriksturesson/backendError"
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={5}>
            <CardMedia
              sx={{ objectFit: "cover" }}
              component="img"
              image={errorDrawingsDocs}
              alt="error drawings docs"
            />

            <CardContent>
              <Typography variant="h3" component="h3">
                error-drawings
              </Typography>
              <Box mb={1}>
                <img
                  style={{ width: 200 }}
                  src="https://img.shields.io/npm/dy/error-drawings?style=flat-square"
                  alt="npm downloads"
                />
              </Box>
              <Box mb={2}>
                <img src="https://img.shields.io/npm/v/error-drawings?style=flat-square" alt="npm version" />
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                sx={{ margin: 1 }}
                startIcon={<DescriptionIcon />}
                variant="contained"
                color="error"
                href="https://www.npmjs.com/package/error-drawings"
                target="_blank"
              >
                Till NPM
              </Button>
              <Button
                sx={{ margin: 1 }}
                variant="contained"
                color="success"
                href="https://github.com/eriksturesson/errorDrawings"
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Denna hemsida
          </Typography>
          <Typography component="cite">
            Hostad lokalt med Docker på en Raspberry Pi via Cloudflare Zero Trust Tunnel. CI/CD sker automatiskt via
            GitHub och Docker Hub.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            href={"https://github.com/eriksturesson/react-eriksturesson"} // Byt ut denna URL med rätt GitHub-repository-länk
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            eriksturesson.se
          </Button>
        </Grid>
      </Grid>
    </MotionBox>
  );
}
