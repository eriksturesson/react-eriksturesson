import GitHubIcon from "@mui/icons-material/GitHub"; // Kom ihåg att importera GitHub-ikonen
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import erikprofilbild from "../assets/img/erik-sturesson-profilbild-2024-04-08.jpg";
import { aboutData, aboutData2 } from "../data/aboutItems";

function LogoGrid({ itemData }: { itemData: string[] }) {
  return (
    <ImageList sx={{ pl: 2, pr: 2 }} cols={itemData.length > 5 ? 5 : itemData.length}>
      {itemData.map((item, i) => (
        <ImageListItem key={i}>
          <img src={item} alt={"code-logos"} loading="lazy" width="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function About() {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
    >
      <Grid container width="100%" sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h2" component="h2" mx={"2vw"} my={"2vw"} textAlign="center">
            Tech-ledare
          </Typography>
          <Typography variant="h3" component="h3" mx={"2vw"} my={"2vw"} align="center">
            Min Stack
          </Typography>
          <LogoGrid itemData={aboutData} />
          <LogoGrid itemData={aboutData2} />
          <Typography variant="h5" component="h5" mt={"4vw"} mb={"2vw"} mx={"2vw"} pl={2} pr={2}>
            Grundat och lett utvecklingen av Sveriges ledande SaaS-plattform för karriärmässor. Ansvarat för att aligna
            produkter med kunders behov och skapa lösningar som effektiviserar och skapar värde. Företaget (Student Node
            AB) blev uppköpt av Poolia 2019, där jag stannade i 6 år. Jag trivs i rollen som brygga mellan teknik, affär
            och användare – med ansvar för kravställning, roadmap och leverans.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id="profilbildDiv">
            <img id="profilbild" src={erikprofilbild} alt="profilbild" style={{ borderRadius: "50%" }} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" textAlign="center">
            Karriärinformation
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
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Typography variant="h5" component="h5" textAlign="center">
            Se koden för eriksturesson.se
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="success"
              href={"https://github.com/eriksturesson/react-eriksturesson"} // Byt ut denna URL med rätt GitHub-repository-länk
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              Kolla in GitHub-projektet
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MotionBox>
  );
}
