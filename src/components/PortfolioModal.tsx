// components/PortfolioModal.tsx
import { Box, Button, Chip, Divider, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";

import CopyLinkSnackbar from "../helpers/CopyLinkSnackBar";
import { copyPortfolioLink } from "../helpers/sharePortfolio";
import { getCategoryColor, mapTagToCategory } from "../helpers/tagHelpers";
import { PortfolioItem } from "../types/portfolio";

interface Props {
  open: boolean;
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ open, item, onClose }: Props) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  if (!item) return null;
  const handleCopy = async () => {
    const success = await copyPortfolioLink(item);
    if (success) setSnackbarOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={onClose}>
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
          {item && item.modal && Object.keys(item.modal).length > 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.modal.description || item.description}</Typography>
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
              <Divider sx={{ pt: 2, mb: 2 }} />
              {item.modal.media && item.modal.media.length > 0 && (
                <Box mt={2}>
                  {/* Example to show images in the modal */}
                  {item.modal.media.map((mediaItem, idx) => (
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
                <Button onClick={onClose} variant="contained" color="error">
                  Stäng
                </Button>
                <Button onClick={handleCopy} variant="contained" color="info">
                  Dela
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
      <CopyLinkSnackbar open={snackbarOpen} onClose={() => setSnackbarOpen(false)} />
    </>
  );
}
