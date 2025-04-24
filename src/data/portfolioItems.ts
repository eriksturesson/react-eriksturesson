import jobPostingSystem from "../assets/img/admin-jobs.section.png";
import bookingSystemAdmin from "../assets/img/adminBookingPrintscreen.png";
import adminDashboard from "../assets/img/admins-layout.png";
import automatiseradStatistik from "../assets/img/adminStatisticsPrintscreen.png";
import matchingApiDocs from "../assets/img/apiDocs.png";
import bookingSystem from "../assets/img/bokningssystem.png";
import studentNodePlatform from "../assets/img/careerFairChalmers.png";
import eventPageTLB from "../assets/img/eventPageTLB.png";
import fakturaSystem from "../assets/img/invoice-studentnode-example.png";
import orderSystem from "../assets/img/orderHistory.png";
import talentReachEMail from "../assets/img/talentReachEmail.png";
import { PortfolioItem } from "../types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Student Node – Mässplattformen",
    description:
      "En komplett SaaS-plattform för karriärmässor, riktad mot både utställande arbetsgivare och studenter. Jag var med och affärsutvecklade plattformen och ledde ombyggnaden av systemet tillsammans med ett team av IT-konsulter. Plattformen innehåller viktiga funktioner såsom bokningssystem för intervjuer, olika adminbehörigheter, samt statistik och kandidatdata som gör det möjligt för arbetsgivare att enkelt följa upp och matcha rätt kandidater.",
    image: { type: "image", src: studentNodePlatform, alt: "Student Node Dashboard" },
    tags: {
      programmingLanguages: ["TypeScript"],
      tools: ["React", "MUI", "Docker"],
      platforms: ["Firebase Realtime DB", "Firebase Cloud Functions", "Firebase Authentication", "GCP"],
    },
  },
  {
    title: "Poolia & Student Node – Eventhemsidor",
    description:
      "Responsiva eventhemsidor för kundevent. Jag designade och utvecklade eventhemsidor för både Poolia och Student Node. Jag var även ansvarig för inbjudningar och hantering av deltagare på flera av Student Nodes events.",
    image: { type: "image", src: eventPageTLB, alt: "Event Page" },
    tags: {
      programmingLanguages: ["HTML", "CSS", "JavaScript"],
      tools: ["React", "MUI"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "API för jobbannonser",
    description:
      "Effektivt API för att matcha kandidater mot jobb med externa system. Jag byggde och dokumenterade ett API som integrerade med externa plattformar, vilket säkerställde hög prestanda och låg latens. Systemet användes för att automatisera jobbmatchning och förbättra kandidatflödet.",
    image: { type: "image", src: matchingApiDocs, alt: "API Documentation" },
    tags: {
      programmingLanguages: ["TypeScript", "JavaScript", "Node.js"],
      tools: ["Express", "Postman", "Docker"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "API för uppdatering av utställare på mässplattformen",
    description:
      "Automatiserad uppdatering av utställare på mässplattformen. Byggde ett API som möjliggjorde enkel och effektiv hantering av utställarinformation på vår mässplattform.",
    image: { type: "image", src: matchingApiDocs, alt: "API Update for Exhibitors" },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Talent Reach",
    description:
      "Automatiserat system för jobbmatchning. Jag designade och byggde Talent Reach – en plattform som automatiskt matchade kandidater med relevanta jobbannonser.",
    image: { type: "image", src: talentReachEMail, alt: "Talent Reach Dashboard" },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["Docker", "API Integration"],
      platforms: ["GCP", "Firebase"],
    },
  },
  {
    title: "Faktureringssystem i mässplattformen",
    description:
      "Faktureringssystem för hantering av tusentals användare och olika prismodeller. Jag utvecklade ett faktureringssystem som möjliggjorde enkel hantering av användarkonton och prismodeller.",
    image: { type: "image", src: fakturaSystem, alt: "Billing System" },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Jobbannonsering i mässplattformen",
    description:
      "System för publicering av jobbannonser och uppföljning. Jag utvecklade ett system som lät användare publicera jobbannonser direkt genom adminportalen.",
    image: { type: "image", src: jobPostingSystem, alt: "Job Posting System" },
    tags: {
      programmingLanguages: ["TypeScript"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Intervjubokningssystem för studenter i mässplattformen",
    description:
      "Ett användarvänligt bokningssystem där studenter kan ansöka om intervjutider med arbetsgivare på karriärmässor.",
    image: { type: "image", src: bookingSystem, alt: "Booking System" },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Antagningssystem för arbetsgivarna i mässplattformen",
    description:
      "Ett kraftfullt system för arbetsgivare att hantera ansökningar, sortera och boka intervjutider med studenter.",
    image: { type: "image", src: bookingSystemAdmin, alt: "Employer Application System" },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Automatisk statistikgenerering i mässystemet",
    description:
      "Datadrivna dashboards och automatiserade rapporter. Jag utvecklade ett system som genererade automatiserade statistiska rapporter baserat på användarbeteende och företagsaktiviteter.",
    image: { type: "image", src: automatiseradStatistik, alt: "Automated Statistics" },
    tags: {
      programmingLanguages: ["TypeScript"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Adminportal i mässsystemet",
    description:
      "En kraftfull och flexibel portal för hantering av alla funktioner relaterade till mässan. Jag skapade en avancerad adminportal där mässarrangörer hade full kontroll över eventets administration.",
    image: { type: "image", src: adminDashboard, alt: "Admin Dashboard" },
    tags: {
      programmingLanguages: ["TypeScript"],
      tools: ["React", "MUI", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
  {
    title: "Ordersystem",
    description:
      "Komplett system för att hantera beställningar och fakturering. Utvecklade ett ordersystem som lät eventarrangören skapa och följa upp beställningar av adminkonton samt hantera översyn av fakturering och köp av utställande företag.",
    image: { type: "image", src: orderSystem, alt: "Order System" },
    modal: {
      description:
        "Här är en detaljerad beskrivning av ordersystemet, inklusive de viktigaste funktionerna och hur systemet underlättade för eventarrangören att hantera beställningar.",
      media: [{ type: "image", src: orderSystem, alt: "Order System" }],
    },
    tags: {
      programmingLanguages: ["TypeScript", "Node.js"],
      tools: ["React", "Firebase Cloud Functions"],
      platforms: ["Firebase", "GCP"],
    },
  },
];
