import jobPostingSystem from "../assets/img/admin-jobs.section.png";
import bookingSystemAdmin from "../assets/img/adminBookingPrintscreen.png";
import adminImage from "../assets/img/adminImg.png";
import adminDashboard from "../assets/img/admins-layout.png";
import automatiseradStatistik from "../assets/img/adminStatisticsPrintscreen.png";
import api from "../assets/img/api.png";
import matchingApiDocs from "../assets/img/apiDocs.png";
import bookingSystem from "../assets/img/bokningssystem.png";
import studentNodePlatform from "../assets/img/careerFairChalmers.png";
import careerFairTechjobs from "../assets/img/careerFairTechjobs.png";
import antagning from "../assets/img/contract-4545562_1280.png";
import eventPageMobile from "../assets/img/eventpage-tlb-mobile-view.png";
import eventPageTLB from "../assets/img/eventPageTLB.png";
import eventPageTLB2 from "../assets/img/eventPageTLB2.png";
import eventPageTLBMobile from "../assets/img/eventPageTLBMobile.png";
import eventPageTLBMobile2 from "../assets/img/eventPageTLBMobile2.png";
import statistics from "../assets/img/graph-6030184_1280.png";
import fakturaSystem from "../assets/img/invoice-studentnode-example.png";
import invoice from "../assets/img/invoice.png";
import jobSearch from "../assets/img/job-5359923_1280.png";
import mobileAppPrintscreen from "../assets/img/mobileAppPrintscreen.jpg";
import mobileAppPrintscreen2 from "../assets/img/mobileAppPrintscreen2.jpg";
import interview from "../assets/img/office-8140320_1280.png";
import orderSystem from "../assets/img/orderHistory.png";
import rekonWebsite from "../assets/img/rekon-website.png";
import website from "../assets/img/responsive-1702827_1280.png";
import rotaryWebsite from "../assets/img/rotaryWebsite.png";
import mobileApp from "../assets/img/smartphone-1833950_1280.png";
import talentReachEMail from "../assets/img/talentReachEmail.png";
import sendEmail from "../assets/img/telegram-5662082_1280.png";
import { PortfolioItem } from "../types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Student Node – Mässplattformen",
    description:
      "En komplett SaaS-plattform för karriärmässor, riktad mot både utställande arbetsgivare och studenter. Jag var med och affärsutvecklade plattformen och ledde ombyggnaden av systemet tillsammans med ett team av IT-konsulter. Plattformen innehåller viktiga funktioner såsom bokningssystem för intervjuer, olika adminbehörigheter, samt statistik och kandidatdata som gör det möjligt för arbetsgivare att enkelt följa upp och matcha rätt kandidater.",
    image: { type: "image", src: adminImage, alt: "Student Node Dashboard" },
    modal: {
      description:
        "Vi hade monopol i Sverige där vårt system användes på över 50st karriärmässor över landet. Här är printscreens från några hemsidor som exemplifierar hur det såg ut. År 2023 byggde jag om hela systemet från vanilla JS till React, Typescript och MUI-ramverket. Under en period hade jag även IT-konsulter med i teamet som jag ledde.",
      media: [
        { type: "image", src: studentNodePlatform, alt: "Student Node Dashboard" },
        { type: "image", src: careerFairTechjobs, alt: "Career Fair Techjobs" },
        { type: "image", src: rekonWebsite, alt: "Rekon Website" },
      ],
    },
    tags: {
      techStack: ["TypeScript", "JavaScript", "Node.js", "MUI", "React", "SCSS", "CSS", "HTML"],
      architecture: [
        "Firebase Auth",
        "Firebase Hosting",
        "Firebase Realtime DB",
        "Firebase Storage",
        "GCP Artifact Registry",
        "Docker",
      ],
      productFocus: ["Frontend", "Backend", "SaaS", "API", "Databaser"],
    },
  },
  {
    title: "Eventhemsidor",
    description:
      "Responsiva eventhemsidor för kundevent. Jag designade och utvecklade eventhemsidor för både Poolia och Student Node. Jag var även ansvarig för inbjudningar och hantering av deltagare på flera av Student Nodes events.",
    image: { type: "image", src: website, alt: "Event Page" },
    modal: {
      description:
        "Här är en detaljerad beskrivning av eventhemsidorna, deras design och funktioner för att hantera inbjudningar och deltagare på Student Nodes events.",
      media: [
        { type: "image", src: eventPageTLB, alt: "Event Page" },
        { type: "image", src: eventPageMobile, alt: "Event Page" },
        { type: "image", src: eventPageTLB2, alt: "Event Page" },
        { type: "image", src: eventPageTLBMobile, alt: "Event Page" },
        { type: "image", src: eventPageTLBMobile2, alt: "Event Page" },
        { type: "image", src: rotaryWebsite, alt: "Event Page" },
      ],
    },
    tags: {
      techStack: ["HTML", "CSS", "JavaScript"],
      architecture: ["Firebase Hosting"],
      productFocus: ["Frontend", "UX/UI"],
    },
  },
  {
    title: "API för jobbannonser",
    description:
      "Effektivt API för att matcha kandidater mot jobb med externa system. Jag byggde och dokumenterade ett API som integrerade med externa plattformar, vilket säkerställde hög prestanda och låg latens. Systemet användes för att automatisera jobbmatchning och förbättra kandidatflödet.",
    image: { type: "image", src: api, alt: "API Documentation" },
    modal: {
      description:
        "Detta API möjliggör matchning av kandidater mot jobbannonser från externa system. Genom att optimera prestanda och minska latens, förbättrade systemet kandidatflödet och gjorde jobbmatchning mer effektiv.",
      media: [{ type: "image", src: matchingApiDocs, alt: "API Documentation" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js"],
      architecture: ["Express", "Docker", "Swagger", "Firebase Realtime DB"],
      productFocus: ["API", "Databaser", "Backend"],
    },
  },
  {
    title: "API för uppdatering av utställare på mässplattformen",
    description:
      "Automatiserad uppdatering av utställare på mässplattformen. Byggde ett API som möjliggjorde enkel och effektiv hantering av utställarinformation på vår mässplattform.",
    image: { type: "image", src: api, alt: "API Update for Exhibitors" },
    modal: {
      description:
        "Detta API underlättade uppdatering av utställarinformation genom att erbjuda en smidig lösning för att hantera och uppdatera utställare på mässplattformen.",
      media: [{ type: "image", src: matchingApiDocs, alt: "API Update for Exhibitors" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js"],
      architecture: ["Express", "Docker", "Swagger", "Firebase Realtime DB"],
      productFocus: ["API", "Databaser", "Backend"],
    },
  },
  {
    title: "Talent Reach",
    description:
      "Automatiserat system för jobbmatchning. Jag designade och byggde Talent Reach – en plattform som automatiskt matchade kandidater med relevanta jobbannonser.",
    image: { type: "image", src: sendEmail, alt: "Talent Reach Dashboard" },
    modal: {
      description:
        "Talent Reach är en plattform som använder automatiserade algoritmer för att matcha kandidater med de mest relevanta jobbannonserna baserat på deras profil och erfarenhet.",
      media: [{ type: "image", src: talentReachEMail, alt: "Talent Reach Dashboard" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js"],
      architecture: ["Docker", "GCP - Compute Engine"],
      productFocus: ["Backend", "API", "Databaser", "E-postautomatisering"],
    },
  },
  {
    title: "Faktureringssystem i mässplattformen",
    description:
      "Faktureringssystem för hantering av tusentals användare och olika prismodeller. Jag utvecklade ett faktureringssystem som möjliggjorde enkel hantering av användarkonton och prismodeller.",
    image: { type: "image", src: invoice, alt: "Billing System" },
    modal: {
      description:
        "Faktureringssystemet i mässplattformen tillåter hantering av användarkonton och anpassade prismodeller för olika användartyper, vilket gör det enkelt att spåra och fakturera användare.",
      media: [{ type: "image", src: fakturaSystem, alt: "Billing System" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "MUI", "React"],
      architecture: ["Firebase Cloud Functions", "Serverless Backend", "Firebase Realtime DB"],
      productFocus: ["Backend", "Frontend", "UX/UI", "API", "Databaser", "E-postautomatisering"],
    },
  },
  {
    title: "Jobbannonsering i mässplattformen",
    description:
      "System för publicering av jobbannonser och uppföljning. Jag utvecklade ett system som lät användare publicera jobbannonser direkt genom adminportalen.",
    image: { type: "image", src: jobSearch, alt: "Job Posting System" },
    modal: {
      description:
        "Systemet gjorde det enkelt för användare att publicera jobbannonser och följa upp publicerade annonser, inklusive funktioner för att redigera och ta bort annonser.",
      media: [{ type: "image", src: jobPostingSystem, alt: "Job Posting System" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React", "MUI"],
      architecture: ["Firebase Hosting", "Firebase Cloud Functions", "Serverless Backend", "Firebase Realtime DB"],
      productFocus: ["Backend", "Frontend", "UX/UI", "API", "Databaser", "SaaS"],
    },
  },
  {
    title: "Intervjubokningssystem för studenter i mässplattformen",
    description:
      "Ett användarvänligt bokningssystem där studenter kan ansöka om intervjutider med arbetsgivare på karriärmässor.",
    image: { type: "image", src: interview, alt: "Booking System" },
    modal: {
      description:
        "Systemet gör det möjligt för studenter att boka intervjutider med arbetsgivare genom en enkel och användarvänlig gränssnitt, vilket effektiviserar bokningsprocessen.",
      media: [{ type: "image", src: bookingSystem, alt: "Booking System" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "MUI", "React"],
      architecture: [
        "Firebase Hosting",
        "Firebase Cloud Functions",
        "Serverless Backend",
        "Firebase Realtime DB",
        "Firebase Auth",
      ],
      productFocus: ["SaaS", "Backend", "Frontend", "UX/UI", "E-postautomatisering"],
    },
  },
  {
    title: "Antagningssystem för arbetsgivarna i mässplattformen",
    description:
      "Ett kraftfullt system för arbetsgivare att hantera ansökningar, sortera och boka intervjutider med studenter.",
    image: { type: "image", src: antagning, alt: "Employer Application System" },
    modal: {
      description:
        "Detta system gör det enkelt för arbetsgivare att hantera ansökningar, sortera kandidater och boka intervjutider med studenter på karriärmässor.",
      media: [{ type: "image", src: bookingSystemAdmin, alt: "Employer Application System" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React", "MUI"],
      architecture: ["Firebase Cloud Functions", "Serverless Backend", "Firebase Realtime DB"],
      productFocus: ["Frontend", "Backend", "SaaS", "UX/UI"],
    },
  },
  {
    title: "Automatisk statistikgenerering i mässystemet",
    description:
      "Datadrivna dashboards och automatiserade rapporter. Jag utvecklade ett system som genererade automatiserade statistiska rapporter baserat på användarbeteende och företagsaktiviteter.",
    image: { type: "image", src: statistics, alt: "Automated Statistics" },
    modal: {
      description:
        "Systemet genererar automatiserade statistikrapporter som gör det möjligt för eventarrangörer att snabbt analysera användarbeteende och företagsaktiviteter.",
      media: [{ type: "image", src: automatiseradStatistik, alt: "Automated Statistics" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React", "MUI"],
      architecture: ["Firebase Cloud Functions", "Serverless Backend", "Firebase Realtime DB"],
      productFocus: ["Frontend", "Backend", "UX/UI", "Datavisualisering"],
    },
  },
  {
    title: "Adminportal i mässsystemet",
    description:
      "En kraftfull och flexibel portal för hantering av alla funktioner relaterade till mässan. Jag skapade en avancerad adminportal där mässarrangörer hade full kontroll över eventets administration.",
    image: { type: "image", src: adminImage, alt: "Admin Dashboard" },
    modal: {
      description:
        "Adminportalen gav arrangörer fullständig kontroll över mässan och dess funktioner, inklusive hantering av utställare, studenter och statistik.",
      media: [{ type: "image", src: adminDashboard, alt: "Admin Dashboard" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React", "MUI"],
      architecture: ["Firebase Cloud Functions", "Serverless Backend", "Firebase Auth", "Firebase Realtime DB"],
      productFocus: ["Frontend", "Backend", "SaaS", "UX/UI"],
    },
  },
  {
    title: "Ordersystem",
    description:
      "Komplett system för att hantera beställningar och fakturering. Utvecklade ett ordersystem som lät eventarrangören skapa och följa upp beställningar av adminkonton samt hantera översyn av fakturering och köp av utställande företag.",
    image: { type: "image", src: invoice, alt: "Order System" },
    modal: {
      description:
        "Här är en detaljerad beskrivning av ordersystemet, inklusive de viktigaste funktionerna och hur systemet underlättade för eventarrangören att hantera beställningar.",
      media: [{ type: "image", src: orderSystem, alt: "Order System" }],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React", "MUI"],
      architecture: ["Firebase Cloud Functions", "Serverless Backend", "Firebase Realtime DB"],
      productFocus: ["Frontend", "Backend", "SaaS"],
    },
  },
  {
    title: "Rapporteringsapp i android och ios",
    description: "Skapade en app för att anställda lättare skulle kunna fylla i mer än bara siffror varje vecka.",
    image: { type: "image", src: mobileApp, alt: "App i React Native" },
    modal: {
      description:
        "Gjorde en app i React Native för att anställda lättare skulle kunna fylla i mer än bara siffror varje vecka och för att kunna aggregera statistik och teamens resultat.",
      media: [
        { type: "image", src: mobileAppPrintscreen, alt: "App i React Native" },
        { type: "image", src: mobileAppPrintscreen2, alt: "App i React Native" },
      ],
    },
    tags: {
      techStack: ["TypeScript", "Node.js", "React Native", "React Native Paper"],
      architecture: ["Metro", "Firebase Auth", "Firebase Hosting", "Firebase Realtime DB", "Firebase Storage"],
      productFocus: ["Frontend", "Backend", "Mobilapp"],
    },
  },
];
