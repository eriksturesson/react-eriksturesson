// components/PortfolioSection.tsx
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
const portfolioItems = [
  {
    title: "Student Node – Mässplattformen",
    description:
      "En komplett SaaS-plattform för karriärmässor, riktad mot både utställande arbetsgivare och studenter. Jag var med och affärsutvecklade plattformen och ledde ombyggnaden av systemet tillsammans med ett team av IT-konsulter. Plattformen innehåller viktiga funktioner såsom bokningssystem för intervjuer, olika adminbehörigheter, samt statistik och kandidatdata som gör det möjligt för arbetsgivare att enkelt följa upp och matcha rätt kandidater. Genom att kombinera tekniska lösningar med användarcentrerad design, har vi skapat en effektiv och skalbar lösning för karriärmässor. När jag slutade hade vi i monopol på Sveriges lärosäten med över 50st arbetsmarknadsdagar som använde systemet.",
    image: studentNodePlatform,
    link: "#",
  },
  {
    title: "Poolia & Student Node – Eventhemsidor",
    description:
      "Responsiva eventhemsidor för kundevent. Jag designade och utvecklade eventhemsidor för både Poolia och Student Node. Jag var även ansvarig för inbjudningar och hantering av deltagare på flera av Student Nodes events, vilket gav mig värdefull erfarenhet av eventhantering och kundinteraktion.",
    image: eventPageTLB,
    link: "#",
  },
  {
    title: "API för jobbannonser",
    description:
      "Effektivt API för att matcha kandidater mot jobb med externa system. Effektivt API för att matcha kandidater mot jobb med externa system. Jag byggde och dokumenterade ett API som integrerade med externa plattformar, vilket säkerställde hög prestanda och låg latens. Systemet användes för att automatisera jobbmatchning och förbättra kandidatflödet.",
    image: matchingApiDocs,
    link: "#",
  },
  {
    title: "API för uppdatering av utställare på mässplattformen.",
    description:
      "Automatiserad uppdatering av utställare på mässplattformen. Byggde ett API som möjliggjorde enkel och effektiv hantering av utställarinformation på vår mässplattform, vilket sparade tid och förbättrade användarupplevelsen för alla inblandade parter.",
    image: matchingApiDocs,
    link: "#",
  },
  {
    title: "Talent Reach",
    description:
      "Automatiserat system för jobbmatchning.Jag designade och byggde Talent Reach – en plattform som automatiskt matchade kandidater med relevanta jobbannonser. Systemet integrerade med externa API:er och användes framgångsrikt i storföretagsmiljön inom PION Group där Student Nod tillsatte 10 % av alla konsulter inom segmentet studenter och 'young professionals' med upp till 5 års erfarenhet.",
    image: talentReachEMail,
    link: "#",
  },
  {
    title: "Faktureringssystem i mässplattformen",
    description:
      "Faktureringssystem för hantering av tusentals användare och olika prismodeller. Jag utvecklade ett faktureringssystem som möjliggjorde enkel hantering av användarkonton och prismodeller, vilket var avgörande för att stödja företagets tillväxt och effektivitet.",
    image: fakturaSystem,
    link: "#",
  },
  {
    title: "Jobbannonsering i mässplattformen",
    description:
      "System för publicering av jobbannonser och uppföljning. Jag utvecklade ett system som lät användare publicera jobbannonser direkt genom adminportalen. Systemet inkluderade funktioner för statistik, uppföljning och filtrering, vilket gav värdefull insikt i arbetsmarknaden.",
    image: jobPostingSystem,
    link: "#",
  },
  {
    title: "Intervjubokningssystem för studenter i mässplattformen",
    description:
      "Ett användarvänligt bokningssystem där studenter kan ansöka om intervjutider med arbetsgivare på karriärmässor. Jag utvecklade ett bokningssystem där studenter enkelt kan ansöka om intervjutider och andra resurser på mässor. Systemet skickar automatiska bekräftelsemail med detaljer om schemat för valda intervjuer, vilket gör det smidigt för studenter att planera och hålla koll på sina möten. Detta system integreras sömlöst med vår adminportal, vilket gör processen för både studenter och arbetsgivare både effektiv och användarvänlig.",
    image: bookingSystem,
    link: "#",
  },
  {
    title: "Antagningssystem för arbetsgivarna i mässplattformen",
    description:
      "Ett kraftfullt system för arbetsgivare att hantera ansökningar, sortera och boka intervjutider med studenter. Som en del av mässplattformen utvecklade jag ett system som gav arbetsgivare möjlighet att hantera alla ansökningar från studenter, samt att överskåda, sortera och välja de mest relevanta kandidaterna för intervjuer. Arbetsgivare kunde också specificera vilka tider som skulle vara tillgängliga för intervjuer, ta bort pauser för raster och justera bokningsbara tider, vilket gav stor flexibilitet och kontroll. Systemet var integrerat med adminportalen för att göra bokningsprocessen snabb och effektiv.",
    image: bookingSystemAdmin,
    link: "#",
  },
  {
    title: "Automatisk statistikgenerering i mässystemet",
    description:
      "Datadrivna dashboards och automatiserade rapporter. Jag utvecklade ett system som genererade automatiserade statistiska rapporter baserat på användarbeteende och företagsaktiviteter. Detta gav oss detaljerad insikt i plattformens prestanda och användarinteraktioner.",
    image: automatiseradStatistik,
    link: "#",
  },
  {
    title: "Adminportal i mässsystemet",
    description:
      "En kraftfull och flexibel portal för hantering av alla funktioner relaterade till mässan.Jag skapade en avancerad adminportal där mässarrangörer hade full kontroll över eventets administration. Portalen gav möjlighet att skapa upp till fyra olika typer av adminkonton med olika nivåer av åtkomst – från arrangörer till företag. Funktionaliteten inkluderade hantering av bokningar, statistik, och möjlighet att ändra texter och bilder på eventhemsidan. Arrangörerna kunde även lägga till och redigera utställande företag, som i sin tur fick möjlighet att logga in och uppdatera sina egna profiler. Företagen kunde dessutom se studenternas CV:n och de som var intresserade av deras erbjudanden. Denna portal var avgörande för att ge både interna och externa användare den flexibilitet och användarvänlighet som krävdes för en effektiv hantering av event och deltagare.",
    image: adminDashboard,
    link: "#",
  },
  {
    title: "Ordersystem",
    description:
      "Komplett system för att hantera beställningar och fakturering. Utvecklade ett ordersystem som lät eventarrangören skapa och följa upp beställningar av adminkonton samt hantera översyn av fakturering och köp av utställande företag.",
    image: orderSystem,
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <Box id="portfolio" sx={{ px: 4, py: 8, bgcolor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Min Portfolio
      </Typography>
      <Typography variant="subtitle1" align="center" mb={6}>
        Här är några av produkterna och projekten jag lett och utvecklat
      </Typography>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.title}
                sx={{
                  height: 180,
                  width: "100%",
                  objectFit: "cover", // This will crop the image and ensure it covers the full width and height
                  objectPosition: "top", // This will keep the center of the image in view
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.link}>
                  Läs mer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
