import { Instagram, LinkedIn, YouTube } from "@mui/icons-material/";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction, Grid, Typography } from "@mui/material";
import "../assets/css/App.css";

//snygg enkel knapp: <Button variant="contained" href="https://eriksturesson.se">Contained</Button>
//<img src={logo} className="App-logo" alt="logo" />

function Footer() {
  return (
    <Grid container sx={{ backgroundColor: "lightgray", p: 4 }}>
      <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center", pb: "2rem" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pb: "1rem" }}>
          Kontakt:
        </Typography>
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          Erik Sturesson
        </Typography>
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          hej@eriksturesson.se
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          textAlign: "center",
          pb: "2rem",
          borderLeft: { md: "solid" },
          borderRight: { md: "solid" },
          borderColor: { md: "white" },
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pb: "1rem" }}>
          Hitta:
        </Typography>
        <BottomNavigation sx={{ backgroundColor: "lightgray" }}>
          <BottomNavigationAction showLabel label="Home" href="#Home" sx={{ color: "inherit" }} icon={<HomeIcon />} />
          <BottomNavigationAction
            showLabel
            label="About"
            href="#About"
            sx={{ color: "inherit" }}
            icon={<PersonIcon />}
          />
          <BottomNavigationAction
            showLabel
            label="Portfolio"
            href="#Portfolio"
            sx={{ color: "inherit" }}
            icon={<AccountTreeIcon />}
          />
          <BottomNavigationAction
            showLabel
            label="Projects"
            href="#Projects"
            sx={{ color: "inherit" }}
            icon={<AccountTreeIcon />}
          />
        </BottomNavigation>
      </Grid>
      <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center", pb: "2rem" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pb: "1rem" }}>
          Sociala medier:
        </Typography>
        <BottomNavigation sx={{ backgroundColor: "lightgray" }}>
          <BottomNavigationAction
            showLabel
            label="Linkedin"
            href="https://linkedin.com/in/eriksturesson"
            icon={<LinkedIn />}
            sx={{ color: "inherit" }}
          />
          <BottomNavigationAction
            showLabel
            label="Instagram"
            href="https://instagram.com/eriksturesson"
            icon={<Instagram />}
            sx={{ color: "inherit" }}
          />
          <BottomNavigationAction
            showLabel
            label="Youtube"
            href="https://www.youtube.com/channel/UCRcLvgoYZ3NxQAp5cy_f78w"
            icon={<YouTube />}
            sx={{ color: "inherit" }}
          />
        </BottomNavigation>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">Copyright © 2023 eriksturesson.se</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
