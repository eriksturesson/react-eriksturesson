// components/PortfolioSection.tsx
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
import jobPostingSystem from "../assets/img/admin-jobs.section.png";
import bookingSystemAdmin from "../assets/img/adminBookingPrintscreen.png";
import adminDashboard from "../assets/img/admins-layout.png";
import automatiseradStatistik from "../assets/img/adminStatisticsPrintscreen.png";
import matchingApiDocs from "../assets/img/apiDocs.png";
import bookingSystem from "../assets/img/bokningssystem.png";
import studentNodePlatform from "../assets/img/careerFairChalmers.png";
import eventPageTLB from "../assets/img/eventPageTLB.png";
import fakturaSystem from "../assets/img/invoice-studentnode-example.png";

import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import orderSystem from "../assets/img/orderHistory.png";
import talentReachEMail from "../assets/img/talentReachEmail.png";

type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "pdf"; src: string; filename?: string }
  | { type: "video"; src: string; caption?: string };
export interface PortfolioItem {
  title: string;
  description: string;
  longDescription?: string;
  image: MediaItem;
  modal?: {
    description?: string;
    media?: MediaItem[];
  };
}
const portfolioItems: PortfolioItem[] = [
  {
    title: "Student Node – Mässplattformen",
    description:
      "En komplett SaaS-plattform för karriärmässor, riktad mot både utställande arbetsgivare och studenter. Jag var med och affärsutvecklade plattformen och ledde ombyggnaden av systemet tillsammans med ett team av IT-konsulter. Plattformen innehåller viktiga funktioner såsom bokningssystem för intervjuer, olika adminbehörigheter, samt statistik och kandidatdata som gör det möjligt för arbetsgivare att enkelt följa upp och matcha rätt kandidater.",
    image: { type: "image", src: studentNodePlatform, alt: "Student Node Dashboard" },
  },
  {
    title: "Poolia & Student Node – Eventhemsidor",
    description:
      "Responsiva eventhemsidor för kundevent. Jag designade och utvecklade eventhemsidor för både Poolia och Student Node. Jag var även ansvarig för inbjudningar och hantering av deltagare på flera av Student Nodes events.",
    image: { type: "image", src: eventPageTLB, alt: "Event Page" },
  },
  {
    title: "API för jobbannonser",
    description:
      "Effektivt API för att matcha kandidater mot jobb med externa system. Jag byggde och dokumenterade ett API som integrerade med externa plattformar, vilket säkerställde hög prestanda och låg latens. Systemet användes för att automatisera jobbmatchning och förbättra kandidatflödet.",
    image: { type: "image", src: matchingApiDocs, alt: "API Documentation" },
  },
  {
    title: "API för uppdatering av utställare på mässplattformen",
    description:
      "Automatiserad uppdatering av utställare på mässplattformen. Byggde ett API som möjliggjorde enkel och effektiv hantering av utställarinformation på vår mässplattform.",
    image: { type: "image", src: matchingApiDocs, alt: "API Update for Exhibitors" },
  },
  {
    title: "Talent Reach",
    description:
      "Automatiserat system för jobbmatchning. Jag designade och byggde Talent Reach – en plattform som automatiskt matchade kandidater med relevanta jobbannonser.",
    image: { type: "image", src: talentReachEMail, alt: "Talent Reach Dashboard" },
  },
  {
    title: "Faktureringssystem i mässplattformen",
    description:
      "Faktureringssystem för hantering av tusentals användare och olika prismodeller. Jag utvecklade ett faktureringssystem som möjliggjorde enkel hantering av användarkonton och prismodeller.",
    image: { type: "image", src: fakturaSystem, alt: "Billing System" },
  },
  {
    title: "Jobbannonsering i mässplattformen",
    description:
      "System för publicering av jobbannonser och uppföljning. Jag utvecklade ett system som lät användare publicera jobbannonser direkt genom adminportalen.",
    image: { type: "image", src: jobPostingSystem, alt: "Job Posting System" },
  },
  {
    title: "Intervjubokningssystem för studenter i mässplattformen",
    description:
      "Ett användarvänligt bokningssystem där studenter kan ansöka om intervjutider med arbetsgivare på karriärmässor.",
    image: { type: "image", src: bookingSystem, alt: "Booking System" },
  },
  {
    title: "Antagningssystem för arbetsgivarna i mässplattformen",
    description:
      "Ett kraftfullt system för arbetsgivare att hantera ansökningar, sortera och boka intervjutider med studenter.",
    image: { type: "image", src: bookingSystemAdmin, alt: "Employer Application System" },
  },
  {
    title: "Automatisk statistikgenerering i mässystemet",
    description:
      "Datadrivna dashboards och automatiserade rapporter. Jag utvecklade ett system som genererade automatiserade statistiska rapporter baserat på användarbeteende och företagsaktiviteter.",
    image: { type: "image", src: automatiseradStatistik, alt: "Automated Statistics" },
  },
  {
    title: "Adminportal i mässsystemet",
    description:
      "En kraftfull och flexibel portal för hantering av alla funktioner relaterade till mässan. Jag skapade en avancerad adminportal där mässarrangörer hade full kontroll över eventets administration.",
    image: { type: "image", src: adminDashboard, alt: "Admin Dashboard" },
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
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const itemName = queryParams.get("portfolio");

    if (itemName) {
      const decodedItemName = decodeURIComponent(itemName).toLowerCase();

      const foundItem = portfolioItems.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "") === decodedItemName.replace(/\s+/g, "")
      );

      if (foundItem) {
        setSelectedItem(foundItem);
        setOpen(true); // Säkerställ att modalen öppnas direkt om vi navigerar in med URL
      }
    }
  }, [location.search, portfolioItems]);

  const handleCopyLink = () => {
    if (selectedItem) {
      const itemSlug = encodeURIComponent(selectedItem.title.toLowerCase().replace(/\s+/g, ""));
      const itemUrl = `${window.location.origin}/portfolio?portfolio=${itemSlug}`;

      navigator.clipboard
        .writeText(itemUrl)
        .then(() => setSnackbarOpen(true))
        .catch((err) => console.error("Fel vid kopiering: ", err));
    }
  };

  const handleOpen = (item: PortfolioItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

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
            <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image.src}
                alt={item.image.type === "image" ? item.image.alt || item.title : item.title}
                sx={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <CardContent sx={{ flexGrow: 1, px: 3, py: 2 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 2 }}>
                {item.modal && Object.keys(item.modal).length > 0 ? (
                  <Button size="small" variant="contained" color="success" onClick={() => handleOpen(item)}>
                    Läs mer
                  </Button>
                ) : (
                  <Button startIcon={<LockOutlinedIcon />} disabled size="small" variant="contained">
                    Läs mer (kommer snart)
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
            maxWidth: 600,
            width: "90%",
            maxHeight: "80vh", // Begränsa maximal höjd på modalen
            overflowY: "auto", // Lägg till scroll om innehållet är för stort
          }}
        >
          {selectedItem && selectedItem.modal && Object.keys(selectedItem.modal).length > 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedItem.title}
              </Typography>
              <Typography variant="body1">{selectedItem.modal.description || selectedItem.description}</Typography>
              {selectedItem.modal.media && selectedItem.modal.media.length > 0 && (
                <Box mt={2}>
                  {/* Example to show images in the modal */}
                  {selectedItem.modal.media.map((mediaItem, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <img
                        src={mediaItem.src}
                        alt={mediaItem.type === "image" ? mediaItem.alt || `Media ${idx}` : `Media ${idx}`}
                        style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
              <Box mt={3} display="flex" justifyContent="space-between">
                <Button onClick={handleClose} variant="contained" color="error">
                  Stäng
                </Button>
                <Button onClick={handleCopyLink} variant="contained" color="info">
                  Dela
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Länk kopierad!
        </Alert>
      </Snackbar>
    </Box>
  );
}
