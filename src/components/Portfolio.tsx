import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data/portfolioItems";
import { getCategoryColor } from "../helpers/tagHelpers";
import { PortfolioItem } from "../types/portfolio";
import PortfolioCard from "./PortfolioCard";
import { PortfolioHelmet } from "./PortfolioHelmet";
import PortfolioModal from "./PortfolioModal";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  // selectedTags innehåller nu kategori och tag, t.ex. "Techstack-Node.js"
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const location = useLocation();
  const navigate = useNavigate(); // För att uppdatera URL:en när modal stängs
  // Dynamically extract the current portfolio URL

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const itemName = queryParams.get("portfolio");

    if (itemName) {
      const decodedItemName = decodeURIComponent(itemName).toLowerCase();
      const foundItem = portfolioItems.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "") === decodedItemName.replace(/\s+/g, ""),
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
    // Uppdatera URL med parameter för öppnat kort
    navigate(`?portfolio=${encodeURIComponent(item.title)}`, { replace: true });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
    // Nollställ URL:en när modal stängs
    navigate("", { replace: true }); // Detta tar bort query-parametern och återställer URL:en
  };

  // Nu kräver vi både kategori och tag för att toggla
  const handleTagClick = (categoryName: string, tag: string) => {
    const tagKey = `${categoryName}-${tag}`;
    setSelectedTags((prevTags) =>
      prevTags.includes(tagKey) ? prevTags.filter((t) => t !== tagKey) : [...prevTags, tagKey],
    );
  };

  // Filtrera på kategori+tag
  const filterPortfolioItems = (items: PortfolioItem[]) => {
    if (selectedTags.length === 0) return items;
    return items.filter((item) => {
      // Bygg en lista av alla kategori-tag kombinationer för detta item
      const itemTagKeys: string[] = [];
      item.tags.techStack.forEach((tag) => itemTagKeys.push(`Techstack-${tag}`));
      item.tags.architecture.forEach((tag) => itemTagKeys.push(`Architecture-${tag}`));
      item.tags.productFocus.forEach((tag) => itemTagKeys.push(`ProductFocus-${tag}`));
      // Om någon av de valda taggarna finns i itemTagKeys, inkludera item
      return selectedTags.some((tagKey) => itemTagKeys.includes(tagKey));
    });
  };

  // Collect all unique tags grouped by category
  const techStack = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.techStack)));
  const architecture = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.architecture)));
  const productFocus = Array.from(new Set(portfolioItems.flatMap((item) => item.tags.productFocus)));

  // Define the categories and their corresponding colors
  const categories: {
    name: "Techstack" | "Architecture" | "ProductFocus";
    tags: string[];
    color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  }[] = [
    { name: "Techstack", tags: techStack, color: "success" },
    { name: "Architecture", tags: architecture, color: "info" },
    { name: "ProductFocus", tags: productFocus, color: "warning" },
  ];

  return (
    <Box id="portfolio" sx={{ px: 4, py: 8, bgcolor: "#f9f9f9" }}>
      {selectedItem && <PortfolioHelmet selectedItem={selectedItem} />}

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Portfolio
        </Typography>
        {/* <Typography variant="caption" component="i">
          (Fortfarande under utveckling)
        </Typography> */}
      </Box>
      {/* Render Tag Filters */}
      <Box mb={4} sx={{ textAlign: "center" }}>
        <Typography variant="body1" fontWeight="bold" mb={1} align="center">
          Filtrera på{" "}
          <Typography component="span" color="green" fontWeight="bold">
            Techstack
          </Typography>
          ,{" "}
          <Typography component="span" color="blue" fontWeight="bold">
            Arkitektur
          </Typography>
          , eller{" "}
          <Typography component="span" color="orange" fontWeight="bold">
            Produktfokus
          </Typography>
        </Typography>

        {categories.map((category) => (
          <Box mb={2} key={category.name}>
            {/* Animerar hela kategorin när den först blir synlig */}
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
              <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center" gap={1}>
                {category.tags.map((tag) => {
                  const tagKey = `${category.name}-${tag}`;
                  return (
                    <motion.div
                      key={tagKey}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      <Chip
                        label={tag}
                        onClick={() => handleTagClick(category.name, tag)}
                        color={getCategoryColor(category.name)}
                        variant={selectedTags.includes(tagKey) ? "filled" : "outlined"}
                        sx={{ cursor: "pointer" }}
                      />
                    </motion.div>
                  );
                })}
              </Stack>
            </motion.div>
          </Box>
        ))}
      </Box>

      {/* Filtered Portfolio Items */}
      <Grid container spacing={4} justifyContent="center">
        {filterPortfolioItems(portfolioItems).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 50 }, // Startposition: osynlig och nedanför
                visible: { opacity: 1, y: 0 }, // Slutposition när synlig
              }}
              transition={{
                type: "spring",
                delay: index * 0.05, // Fördröjning mellan korten
                stiffness: 100,
                damping: 25,
              }}
            >
              <PortfolioCard item={item} onClick={() => handleOpen(item)} />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <PortfolioModal open={open} item={selectedItem} onClose={handleClose} />
    </Box>
  );
}
