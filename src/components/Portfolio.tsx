// components/PortfolioSection.tsx
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { portfolioItems } from "../data/portfolioItems";
import { PortfolioItem } from "../types/portfolio";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioSection() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
        setOpen(true);
      }
    }
  }, [location.search]);

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
                sx={{ objectFit: "cover", objectPosition: "top" }}
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
                  <Button disabled size="small" variant="contained">
                    Läs mer (kommer snart)
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <PortfolioModal open={open} item={selectedItem} onClose={handleClose} />
    </Box>
  );
}
