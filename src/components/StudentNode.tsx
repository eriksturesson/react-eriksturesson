import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";
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
  const logoGroups = chunkArray(companiesInStudentNode, 100); // Delar upp i grupper om 10 företag
  const MotionBox = motion(Box); // Använd motion för att animera Box-komponenten
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      id="studentnode"
      sx={{ mt: "4rem", pt: "4rem", width: "100%", bgcolor: "#f9f9f9" }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Student Node AB
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ pr: "2rem", pl: "2rem" }}>
          VD och medgrundare av Student Node AB. Sveriges ledande Saas-plattform för karriärmässor mellan 2015-2025.
          <a href="https://www.placera.se/pressmeddelanden/poolia-koper-in-i-sig-i-studenteventforetaget-student-node-2019-03-29">
            Uppköpta av Poolia 2019
          </a>
          , <a href="https://www.borsvarlden.com/finwire/FWM00B0C94">avvecklade 2025</a>.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2, pr: "2rem", pl: "2rem" }}>
          Föutom all statistik, 20 000 + studenter och CVn,fanns 2394 st uställande arbetsgivare som varit på
          karriärmässor för att träffa talanger, i vårt system.
        </Typography>
        <Typography variant="caption" sx={{ mt: 2, mb: 5, pr: "2rem", pl: "2rem" }}>
          Nedan är exempel på utställare i vårt IT-system:
        </Typography>

        {logoGroups.map((group, idx) => (
          <Box key={idx} sx={{ my: 4 }}>
            <CompanyNameCarousel key={idx} companyNames={group} direction={idx % 2 === 0 ? "left" : "right"} />
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
}
