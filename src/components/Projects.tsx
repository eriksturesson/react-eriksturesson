import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { CardActionArea, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "../assets/css/index.css";

import { motion } from "motion/react";
import { projectCardItems } from "../data/projectItems";
import { ProjectCardItem } from "../types/projects";
import { ModalForProjectItems } from "./ProjectModal";

export default function ProjectTimeline(): JSX.Element {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(700));
  const [selectedItem, setSelectedItem] = useState<ProjectCardItem | null>(null);

  const openModal = (item: ProjectCardItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <Timeline position={matches ? "alternate" : "left"} sx={{ margin: "10vw" }}>
        <Box sx={{ p: "1rem" }}>
          <Typography sx={{ textAlign: "center" }} variant="h2">
            Min IT-resa
          </Typography>

          {projectCardItems
            .sort((a: ProjectCardItem, b: ProjectCardItem) => b.year - a.year)
            .map((cardObject: ProjectCardItem, i) => (
              <TimelineItem key={i} onClick={() => openModal(cardObject)}>
                <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2">
                  År {cardObject.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <cardObject.icon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05, // Stagger-animation för taggar
                        },
                      },
                    }}
                  >
                    <motion.div
                      key={i + "motion-div"}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            sx={{ mt: "2.7vw", mb: "2.7vw" }}
                            component="img"
                            className={cardObject.cssClass}
                            height={cardObject.height}
                            image={cardObject.image}
                            alt={cardObject.alt}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {cardObject.headerText}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                              {cardObject.descriptionText}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </motion.div>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Box>
      </Timeline>
      <ModalForProjectItems isOpen={!!selectedItem} onClose={closeModal} content={selectedItem} />
    </>
  );
}
