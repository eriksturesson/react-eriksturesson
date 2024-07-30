import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LaptopIcon from "@mui/icons-material/Laptop";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { CardActionArea, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./css/index.css";
import adminImg from "./img/adminImg.png";
import databaseImg from "./img/database.png";
import gears from "./img/gears.jpg";
import mysqlLogo from "./img/mysql-logo.png";
import powershellLogo from "./img/powershell-logo.png";
import raspberrypiImage from "./img/raspberryPi-logo.png";
import reactLogo from "./img/react-icon.png";
import rotarywebsida from "./img/rotarywebsida.png";
import schemalaggningsAppImage from "./img/schemalaggningsapp.png";
import techleadersboat from "./img/techleadersboat.png";
import typescriptLogo from "./img/typescript-logo.png";

export interface CardItem {
  image: any;
  icon: any;
  alt: string;
  height: string;

  cssClass?: any;

  headerText: string;
  descriptionText: string;

  year: number;
}
const cardItems: CardItem[] = [
  {
    image: powershellLogo,
    icon: CodeIcon,
    alt: `powershellLogo`,
    year: 2015,
    height: "100%",
    headerText: "Powershell",
    descriptionText:
      "Lärde mig powershellscript för att exemeplvis lätt komma in i rätt projekt och undermappar med egna 'erikcd' commandon, 'erikrun' som kör olika program och 'erikopen' för att öppna olika projekt från rätt directories.",
  },
  {
    image: databaseImg,
    icon: DataObjectIcon,
    alt: `databaseImg`,
    year: 2019,
    height: "100%",
    headerText: "GDPR-script i Powershell",
    descriptionText:
      "Skapade ett program som går igenom samtliga filer (säkerhetskopior i mitt fall), gick igenom alla rader och identifierade en sträng som skulle tas bort och då raderades alla rader med detta.",
  },
  {
    image: mysqlLogo,
    icon: DataObjectIcon,
    alt: `MySQL`,
    year: 2020,
    height: "100%",
    headerText: "MySQL",
    descriptionText:
      "Lärde mig SQL för att skapa en relationsdatabas i syfte att få ordning på data samt snabbt och enkelt sortera och få ut vad vi behövde.",
  },
  {
    image: rotarywebsida,
    icon: LaptopIcon,
    alt: `Rotary Website`,
    year: 2020,
    height: "100%",
    headerText: "Rotary Website",
    descriptionText:
      "Skapade mobilanpassad hemsida för Stockholm City Affärsnätverk, idag har systemet även inloggning med CMS för redigering av hemsidan.",
  },
  {
    image: techleadersboat,
    icon: LaptopIcon,
    alt: `Tech Leaders Boat`,
    year: 2020,
    height: "100%",
    headerText: "Tech Leaders Boat",
    descriptionText:
      "Från mobilanpassad hemsida på Stockholm City Affärsnätverk började webbsidan användas för kundevenemang på Student Node AB. Senare år 2022 började det användas inom PION Group (Poolia/QRIOS/Uniflex m.fler) för kundevenemang, då via pooliaevent.se och qriosevent.se så som oktoberfest.qriosevent.se.",
  },
  {
    image: raspberrypiImage,
    icon: CodeIcon,
    alt: `RaspberryPi`,
    year: 2021,
    height: "100%",
    headerText: "Automatisering av script",
    descriptionText: "Konfiguration och kod integrerat till Linux i syfte att automatisera köra dagliga script.",
  },
  {
    image: schemalaggningsAppImage,
    icon: ScheduleIcon,
    alt: `Schemaläggningsapp`,
    year: 2022,
    height: "100%",
    headerText: "Bokning",
    descriptionText:
      "Helt egenbyggt schemaläggningssystem av intervjuer med företag vid evenemang och studentmässor med flertalet funktioner som automatiska mailutskick vid olika tillfällen, avbokningsmöjligheter i CMS av admin, kod som ger admin-användaren valmöjligheter när hen börjar göra eventuella misstag så som att korrigera eller göra omval av bokningsbara tider när vanliga användare/kandidater redan bokat.",
  },
  {
    image: typescriptLogo,
    icon: CodeIcon,
    alt: `Typescriptlogo`,
    year: 2022,
    height: "100%",
    headerText: "Typescript",
    descriptionText:
      "Lärde mig Typescript för att i organisationen minska antalet framtida buggar och göra det enklare att få en överblick på koden.",
  },
  {
    image: gears,
    icon: AutoModeIcon,
    alt: `AutoModeIcon`,
    year: 2022,
    height: "100%",
    headerText: "Matchning",
    descriptionText: "Automatisering av kandidatmatchning till jobb i olika system [kan inte berätta mer än så].",
  },
  {
    image: adminImg,
    icon: AdminPanelSettingsIcon,
    alt: `Reactlogo`,
    year: 2023,
    height: "100%",
    headerText: "Admin system",
    descriptionText:
      "Adminsystem med olika behörighetsnivåer i Student Nodes CMS. Nya funktioner och kontrollverktyg för en superuser för att hantera, bjuda in och ändra admins.",
  },
  {
    image: reactLogo,
    cssClass: `App-logo`,
    icon: CodeIcon,
    alt: `Reactlogo`,
    year: 2024,
    height: "100%",
    headerText: "Ombyggnad",
    descriptionText:
      "10 år av kod i Student Node ombyggt på 9 månder från vanilla JS och Node till Typescript, React och MUI-ramverket.",
  },
];

export default function ProjectTimeline(): JSX.Element {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(700));
  return (
    <Timeline position={matches ? "alternate" : "left"} sx={{ margin: "10vw" }}>
      <Box sx={{ p: "1rem" }}>
        <Typography sx={{ textAlign: "center" }} variant="h2">
          Min IT-resa
        </Typography>
        {cardItems
          .sort((a: CardItem, b: CardItem) => b.year - a.year)
          .map((cardObject: CardItem, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2">
                År {cardObject.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <cardObject.icon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      sx={{ mt: "2.7vw", mb: "2.7vw" }}
                      component="img"
                      className={cardObject.cssClass}
                      height={cardObject.height}
                      image={cardObject.image}
                      alt={cardObject.alt}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {cardObject.headerText}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {cardObject.descriptionText}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Box>
    </Timeline>
  );
}
