import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

/**
 * Lokalt anspråk för Ekerö och Mälaröarna (HOME-113, alternativ A).
 *
 * Den här sektionen är inte dekoration — den är förutsättningen för att
 * ortsnamnen i index.html:s description, keywords och ProfessionalService-
 * schema ska vara ärliga. Ortsnamn i metadata utan motsvarande innehåll på
 * sidan är precis den optimering Google straffar, så de två hänger ihop:
 * tas den här bort ska ortsnamnen i index.html också bort.
 *
 * Texten påstår medvetet ingenting om var Erik BOR eller hur länge han
 * varit i trakten — bara var han tar uppdrag, vilket är exakt vad
 * areaServed i schemat säger. Sturesson Holding gör inget lokalt anspråk;
 * det var en del av samma beslut.
 */
export default function LocalArea() {
  return (
    <Box component="section" sx={{ px: 2, py: 8, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Uppdrag på Ekerö och Mälaröarna
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Jag tar uppdrag som teknisk projektledare på Ekerö, övriga Mälaröarna och i
          Stockholm — på plats när det behövs, och på distans när det går lika bra.
        </Typography>

        <Typography variant="body1">
          Det handlar oftast om samma saker som resten av den här sidan visar:
          digitalisering av manuella flöden, automation, och att leda utveckling från
          idé till driftsatt produkt. Är du ett mindre bolag i trakten som behöver
          någon som kan både tekniken och projektledningen — hör av dig via kontaktuppgifterna nedan.
        </Typography>
      </Container>
    </Box>
  );
}
