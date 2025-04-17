import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import api from "../assets/img/api.png";
import cloud_functions from "../assets/img/cloud_functions.png";
import compute_engine from "../assets/img/compute_engine.png";
import erikprofilbild from "../assets/img/erik-sturesson-profilbild-2024-04-08.jpg";
import firebaseLogo from "../assets/img/firebase-logo.png";
import firestore from "../assets/img/firestore.png";
import gcpLogo from "../assets/img/GCP.webp";
import muiLogo from "../assets/img/mui-logo.png";
import nodejsLogo from "../assets/img/nodejs-logo.png";
import reactLogo from "../assets/img/react-icon.png";
import typescriptLogo from "../assets/img/typescript-logo.png";
const itemData = [typescriptLogo, firebaseLogo, nodejsLogo, muiLogo, reactLogo];
const itemData2 = [gcpLogo, firestore, compute_engine, cloud_functions, api];
function LogoGrid({ itemData }: { itemData: string[] }) {
  return (
    <ImageList cols={itemData.length > 5 ? 5 : itemData.length}>
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
          <LogoGrid itemData={itemData} />
          <LogoGrid itemData={itemData2} />
          <Typography variant="h5" component="h5" mt={"4vw"} mb={"2vw"} mx={"2vw"}>
            Medgrundare av Student Node år 2014. Då fokus på affärsutveckling, sälj och kundkontakt. Från år 2017 även
            programmering av våra IT-system. Från år 2019 när vi blev uppköpta av PION Group (då Poolia) har jag även
            byggt automatiseringar internt i koncernen.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id="profilbildDiv">
            <img id="profilbild" src={erikprofilbild} alt="profilbild" style={{ borderRadius: "50%" }} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" textAlign="center">
            För att se en detaljerad översikt av min karriär, besök min LinkedIn-profil:
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="success"
              href={"https://www.linkedin.com/in/eriksturesson"}
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              Besök min LinkedIn-profil
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
