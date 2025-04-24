import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { portfolioItems } from "../data/portfolioItems";
import { getCategoryColor } from "../helpers/tagHelpers";
import { PortfolioItem } from "../types/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) => (prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]));
  };

  const filterPortfolioItems = (items: PortfolioItem[]) => {
    if (selectedTags.length === 0) return items; // Return all items if no tag is selected
    return items.filter((item) =>
      selectedTags.some(
        (tag) =>
          item.tags.programmingLanguages.includes(tag) ||
          item.tags.tools.includes(tag) ||
          item.tags.platforms.includes(tag)
      )
    );
  };

  // Collect all unique tags grouped by category
  const programmingLanguages = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.programmingLanguages)));
  const tools = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.tools)));
  const platforms = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.platforms)));

  // Define the categories and their corresponding colors
  const categories: {
    name: "Languages" | "Tools" | "Platforms";
    tags: string[];
    color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  }[] = [
    { name: "Languages", tags: programmingLanguages, color: "success" },
    { name: "Tools", tags: tools, color: "info" },
    { name: "Platforms", tags: platforms, color: "warning" },
  ];

  return (
    <Box id="portfolio" sx={{ px: 4, py: 8, bgcolor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Portfolio
      </Typography>

      {/* Render Tag Filters */}
      <Box mb={4} sx={{ textAlign: "center" }}>
        <Typography variant="body1" fontWeight="bold" mb={1} align="center">
          Filter by{" "}
          <Typography component="span" color="green" fontWeight="bold">
            Languages
          </Typography>
          ,{" "}
          <Typography component="span" color="blue" fontWeight="bold">
            Tools
          </Typography>
          , or{" "}
          <Typography component="span" color="orange" fontWeight="bold">
            Platforms
          </Typography>
        </Typography>

        {/* Loop through each category and render its tags */}
        {categories.map((category) => (
          <Box mb={2} key={category.name}>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" alignItems="center">
              {category.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => handleTagClick(tag)}
                  color={getCategoryColor(category.name)}
                  variant={selectedTags.includes(tag) ? "filled" : "outlined"}
                  sx={{ cursor: "pointer" }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>

      {/* Filtered Portfolio Items */}
      <Grid container spacing={4} justifyContent="center">
        {filterPortfolioItems(portfolioItems).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PortfolioCard item={item} onClick={() => handleOpen(item)} />
          </Grid>
        ))}
      </Grid>

      <PortfolioModal open={open} item={selectedItem} onClose={handleClose} />
    </Box>
  );
}
