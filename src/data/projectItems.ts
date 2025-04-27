import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LaptopIcon from "@mui/icons-material/Laptop";
import ScheduleIcon from "@mui/icons-material/Schedule";
import adminImg from "../assets/img/adminImg.png";
import databaseImg from "../assets/img/database.png";
import dockerCloudRunVertexAI from "../assets/img/docker-cloudrun-vertexAI.png";
import gears from "../assets/img/gears.jpg";
import mysqlLogo from "../assets/img/mysql-logo.png";
import powershellLogo from "../assets/img/powershell-logo.png";
import raspberrypiImage from "../assets/img/raspberryPi-logo.png";
import reactLogo from "../assets/img/react-icon.png";
import rotarywebsida from "../assets/img/rotarywebsida.png";
import schemalaggningsAppImage from "../assets/img/schemalaggningsapp.png";
import techleadersboat from "../assets/img/techleadersboat.png";
import typescriptLogo from "../assets/img/typescript-logo.png";
import { ProjectCardItem } from "../types/projects";
export const projectCardItems: ProjectCardItem[] = [
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
    modal: {
      descriptionText:
        "Detta script gjorde att vi på ett automatiserat sätt kunde ta bort personuppgifter från hundratals filer och säkerhetskopior.",
    },
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
    modal: {
      descriptionText:
        "Hemsidan används idag för att boka in sig på olika evenemang och för att se vilka som är medlemmar i nätverket.",
      callToActionText: "Besök hemsidan",
      callToActionLink: "https://stockholmcityaffarsnatverk.se",
    },
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
    modal: {
      descriptionText: "Bland flera kundevenemang är här länken till ett av Student Nodes evenemang:",
      callToActionText: "Besök Tech Leaders Boat",
      callToActionLink: "https://2023.techleadersboat.se",
    },
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
    alt: `AdminPanellogo`,
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
    modal: {
      descriptionText:
        "Hela vårt IT-system som används på majoriteten av Sveriges arbetsmarknadsdagar idag, med hemsidor för de olika mässorna, har byggt om. Under projektet har jag programmerat majoritetn själv men även fått lyxen att jobba ihop med duktiga IT-konsulter och 2st praktikanter som bidragit i gruppen.",
      callToActionText: "Demo för vårt IT-system",
      callToActionLink: "https://beta.studentnote.se/",
    },
  },
  {
    image: dockerCloudRunVertexAI,
    icon: CodeIcon,
    alt: `backend-logos`,
    year: 2024,
    height: "100%",
    headerText: "System för matchning inom PION Group blir webbapp",
    descriptionText:
      "Matchningssystem som tidigare byggt i backend blir webbapp och backend flyttas till Docker i Google Cloud Run. Vertex AI används vid automatisering.",
    modal: {
      descriptionText:
        "Matchningssystemet som tidigare byggts i backend (se år 2022) flyttas till en webbapp för att rekryterare ska kunna se och redigera konsulter som passar till jobb. Jag bryter ut backend som jobbar väldigt mycket (frontend används mest för att SEN visa resultatet, dvs matchningarna av konsulter och jobb). Backend flyttas till Docker i Google Cloud Run. Vertex AI används för olika automatiseringar men jag kan inte gå in närmare på vad. Tyvärr kan jag inte länka till systemet då det är känslig information.",
    },
  },
];
