import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { getCategoryColor, mapTagToCategory } from "../helpers/tagHelpers";
import { PortfolioItem } from "../types/portfolio";

import { useState } from "react";
import CopyLinkSnackbar from "../helpers/CopyLinkSnackBar";
import { copyPortfolioLink } from "../helpers/sharePortfolio";

export default function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCopy = async () => {
    const success = await copyPortfolioLink(item);
    if (success) setSnackbarOpen(true);
  };
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="180"
        image={item.image.src}
        alt={"alt" in item.image ? item.image.alt : item.title}
        sx={{ objectFit: "contain", pt: 2 }}
      />
      <CardContent sx={{ flexGrow: 1, px: 2, py: 2 }}>
        <Typography gutterBottom variant="h6">
          {item.title}
        </Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Divider sx={{ pt: 2, mb: 2 }} />
        <Stack direction="column" sx={{ width: "100%" }}>
          {Object.entries(item.tags).map(([category, tags], index) => (
            <Box key={category}>
              <Stack direction="row" flexWrap="wrap" gap={0.5}>
                {tags.map((tag: string) => (
                  <Chip
                    key={`${category}-${tag}`}
                    label={tag}
                    color={getCategoryColor(mapTagToCategory(category))}
                    variant="filled"
                    size="small"
                    sx={{ m: 0.5 }} // Ökat mellanrum mellan chipsen
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 2 }}>
        {item.modal ? (
          <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="success" onClick={() => onClick(item)}>
              Läs mer
            </Button>
            <Button onClick={handleCopy} variant="contained" color="info">
              Dela
            </Button>
          </Box>
        ) : (
          <Button startIcon={<LockOutlinedIcon />} disabled size="small" variant="contained">
            Läs mer (kommer snart)
          </Button>
        )}
      </CardActions>
      <CopyLinkSnackbar open={snackbarOpen} onClose={() => setSnackbarOpen(false)} />
    </Card>
  );
}
