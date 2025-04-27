import { Box, Typography } from "@mui/material";
import { companiesInStudentNode } from "../data/companiesInStudentNode";
import { CompanyNameCarousel } from "./CompanyNamesCarousel";

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}
export default function StudentNode() {
  const logoGroups = chunkArray(companiesInStudentNode, 10); // Delar upp i grupper om 10 företag

  return (
    <Box id="studentnode" sx={{ mt: "4rem", pt: "4rem", width: "100%", bgcolor: "#f9f9f9" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Student Node AB
        </Typography>
        <Typography variant="h5" gutterBottom>
          VD och medgrundare av Student Node AB. Sveriges ledande Saas-plattform för karriärmässor mellan 2015-2025.
          <a href="https://www.placera.se/pressmeddelanden/poolia-koper-in-i-sig-i-studenteventforetaget-student-node-2019-03-29">
            Uppköpta av Poolia 2019
          </a>
          , <a href="https://www.borsvarlden.com/finwire/FWM00B0C94">avvecklade 2025</a>.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          Föutom all statistik, 20 000 + studenter och CVn,fanns 2394 st uställande arbetsgivare som varit på
          karriärmässor för att träffa talanger, i vårt system.
        </Typography>
        <Typography variant="caption" sx={{ mt: 2, mb: 5 }}>
          Nedan har jag samlat några av dessa uställare som funnits på mässor över hela Sverige: Sverige:
        </Typography>

        {logoGroups.map((group, idx) => (
          <Box key={idx} sx={{ my: 4 }}>
            <CompanyNameCarousel key={idx} companyNames={group} direction={idx % 2 === 0 ? "left" : "right"} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
