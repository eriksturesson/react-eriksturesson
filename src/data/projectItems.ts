import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LaptopIcon from "@mui/icons-material/Laptop";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
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
import eventLandingPagesExample from "../assets/img/Event Landing Pages example.png";
import { ProjectCardItem } from "../types/projects";

export const projectCardItems: ProjectCardItem[] = [
  {
    image: databaseImg,
    icon: CloudSyncIcon,
    alt: `Master Data Hub`,
    year: 2025,
    height: "100%",
    headerText: "Master Data Hub",
    descriptionText:
      "Fullstackutvecklare hos Affibody. Skapade en Master Data Hub för persondata, integrationer mot Personio, Entra, Microsoft AD, BankID och externa APIer. Arbetade mycket med app registrations, consent flows och säker inloggning. Ansvarade för Azure-miljö, Cosmos DB, Azure Functions och automatisering via GitHub Actions.",
    modal: {
      descriptionText:
        "På Affibody ansvarade jag för att bygga och drifta en master data hub för persondata, där integrationer mot Personio, Entra, Microsoft AD och BankID var centrala. Jag byggde och dokumenterade APIer, satte upp app registrations och hanterade consent flows för säker inloggning. Azure-miljön bestod av Cosmos DB, Azure Functions och automatisering via GitHub Actions. Rollen innefattade även arkitektur och säkerhetsfrågor kring identitet och access.",
    },
  },
  {
    image: adminImg,
    icon: FingerprintIcon,
    alt: `Identitetsverifiering`,
    year: 2025,
    height: "100%",
    headerText: "Identitetsverifiering",
    descriptionText:
      "Fullstackutvecklare på T34MS. Byggde ett system för identitetsverifiering med API:er och webhook så att andra system kan använda detta. Fokus på säkerhet, integrationer och automatisering.",
    modal: {
      descriptionText:
        "Jag jobbade som fullstackutvecklare för att bygga ett system för identitetsverifiering med API:er och webhook, så att andra system kan använda sig av detta. Fokus på säkerhet, integrationer och automatisering.",
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
    image: raspberrypiImage,
    icon: CodeIcon,
    alt: `RaspberryPi`,
    year: 2021,
    height: "100%",
    headerText: "Automatisering av script",
    descriptionText: "Konfiguration och kod integrerat till Linux i syfte att automatisera köra dagliga script.",
  },
  {
    image: eventLandingPagesExample,
    icon: LaptopIcon,
    alt: `Event Landing Pages`,
    year: 2020,
    height: "100%",
    headerText: "Event Landing Pages Evolution",
    descriptionText:
      "Utvecklade och underhöll event-plattform sedan 2020. Startade med Stockholm City Affärsnätverk (Rotary) och Tech Leaders Boat - ett årligt event för Sveriges IT-ledare som använts varje år sedan start. År 2022 började systemet även användas inom PION Group (Poolia/QRIOS/Uniflex) för kundevents. Nyligen ombyggt från scratch på fritid med modernt adminsystem och CMS som inte fanns i ursprungsversionen. Används fortfarande aktivt för olika typer av events.",
    modal: {
      descriptionText:
        "Event Landing Pages började 2020 som en mobilanpassad hemsida för Stockholm City Affärsnätverk. Samma år började systemet användas för Tech Leaders Boat - ett prestigefyllt årligt event för Sveriges IT-ledare som har använt plattformen varje år sedan dess. År 2022 expanderade användningen till PION Groups kundevents via pooliaevent.se och qriosevent.se (t.ex. oktoberfest.qriosevent.se). Systemet har nyligen byggts om från scratch på fritid med ett modernt adminsystem med CMS-funktionalitet, inbjudningshantering och möjlighet att skapa huvudsidor och undersidor - funktioner som inte fanns i den ursprungliga versionen. Plattformen används fortfarande aktivt för både Stockholm City Affärsnätverk och privata events.",
      callToActionText: "Besök Stockholm City Affärsnätverk",
      callToActionLink: "https://stockholmcityaffarsnatverk.se",
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
    image: powershellLogo,
    icon: CodeIcon,
    alt: `powershellLogo`,
    year: 2015,
    height: "100%",
    headerText: "Powershell",
    descriptionText:
      "Lärde mig powershellscript för att exemeplvis lätt komma in i rätt projekt och undermappar med egna 'erikcd' commandon, 'erikrun' som kör olika program och 'erikopen' för att öppna olika projekt från rätt directories.",
  },
];
