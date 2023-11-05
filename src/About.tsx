import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import erikprofilbild from "./img/erik-sturesson-profilbild.jpg";
import javascriptLogo from "./img/javascript-logo.png";
import nodejsLogo from "./img/nodejs-logo.png";
import firebaseLogo from "./img/firebase-logo.png";
import typescriptLogo from "./img/typescript-logo.png";
import Typography from "@mui/material/Typography";
import { ImageList, ImageListItem } from "@mui/material";
import reactLogo from "./img/react-icon.png";

function LogoGrid() {
  const itemData = [typescriptLogo, firebaseLogo, nodejsLogo, javascriptLogo, reactLogo];

  return (
    <ImageList cols={5}>
      {itemData.map((item, i) => (
        <ImageListItem key={i}>
          <img src={item} alt={"code-logos"} loading="lazy" width="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function About() {
  return (
    <Box>
      <Grid container width="100%" sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h2" component="h2" mx={"2vw"} my={"2vw"} textAlign="center">
            Entreprenör & Fullstack
          </Typography>
          <Typography variant="h3" component={"h3"} mx={"2vw"} my={"2vw"} align="center">
            Min Stack
          </Typography>
          <LogoGrid />

          <Typography variant="h5" component="h5" mt={"4vw"} mb={"2vw"} mx={"2vw"}>
            Medgrundare av Student Node år 2014. Då fokus på sälj och kundkontakt. Från år 2017 programmering av våra
            IT-system. Sedan 2019 då vi blev uppköpta av PION-Group (då Poolia), även automatisering i koncernens
            system.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id="profilbildDiv">
            <img id="profilbild" src={erikprofilbild} alt="profilbild" style={{ borderRadius: "50%" }} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
