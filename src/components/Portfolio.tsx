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
    title: "Student Node – Plattformen",
    description:
      "En komplett karriärplattform för studenter och företag. Skapad från idé till lansering – inklusive backend, frontend, design och UX.",
    image: studentNodePlatform,
    link: "#",
  },
  {
    title: "Poolia & Student Node – Eventhemsidor",
    description:
      "Responsiva eventhemsidor byggda för att hantera kundevent. På vissa av Student Nodes eventen bjöd jag själv in merparten av deltagarna även när vi var en del av Poolia.",
    image: eventPageTLB,
    link: "#",
  },
  {
    title: "API för jobbannonser",
    description:
      "Byggde ett internt API för att matcha kandidater mot jobb med externa system. Dokumenterat och produktionssatt. Hög prestanda, låg latens.",
    image: matchingApiDocs,
    link: "#",
  },
  {
    title: "API för uppdatering av utställare på mässplattformen",
    description:
      "Byggde ett internt API för att matcha kandidater mot jobb med externa system. Dokumenterat och produktionssatt. Hög prestanda, låg latens.",
    image: matchingApiDocs,
    link: "#",
  },
  {
    title: "Talent Reach",
    description:
      "Byggde ett internt API för att matcha kandidater mot jobb med externa system. Dokumenterat och produktionssatt. Hög prestanda, låg latens.",
    image: talentReachEMail,
    link: "#",
  },
  {
    title: "Student Node – Faktureringssystem",
    description:
      "Designade och byggde ett faktureringssystem för att hantera tusentals användare, företagskonton och olika prismodeller.",
    image: fakturaSystem,
    link: "#",
  },
  {
    title: "Student Node – Jobbannonsering",
    description:
      "Utvecklade ett system för att publicera jobbannonser via adminportalen direkt till våra hemsidor. Med statistik, uppföljning och filtrering.",
    image: jobPostingSystem,
    link: "#",
  },
  {
    title: "Student Node – Bokningssystem",
    description:
      "Användarvänligt bokningssystem där företag kunde boka in sig på events, intervjutider och andra resurser direkt via adminportalen.",
    image: bookingSystem,
    link: "#",
  },
  {
    title: "Student Node – Bokningssystem för admin",
    description:
      "Användarvänligt bokningssystem där företag kunde boka in sig på events, intervjutider och andra resurser direkt via adminportalen.",
    image: bookingSystemAdmin,
    link: "#",
  },
  {
    title: "Student Node - Automatisk statistikgenerering",
    description:
      "Utvecklade datadrivna dashboards och rapporter som genererades automatiskt baserat på användarbeteende och företagsaktiviteter.",
    image: automatiseradStatistik,
    link: "#",
  },
  {
    title: "Student Node – Adminportal",
    description:
      "Skapade en kraftfull portal för både intern administration och företagsanvändare. Rollstyrning, statistik, export, och mer.",
    image: adminDashboard,
    link: "#",
  },
  {
    title: "Ordersystem",
    description:
      "Skapade en kraftfull portal för både intern administration och företagsanvändare. Rollstyrning, statistik, export, och mer.",
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
