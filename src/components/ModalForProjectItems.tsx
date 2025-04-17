// Modal.tsx
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { CardItem } from "./Projects";

// Props för modalen
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: CardItem | null; // Om ingen modal är vald
}

export const ModalForProjectItems: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!content) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {content.headerText}
        <IconButton
          //edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          <img src={content.image} alt={content.alt} style={{ height: content.height, width: "100%" }} />
        </Typography>
        <Typography variant="body1" component="p">
          {content.descriptionText}
        </Typography>
        {content.modal && <Divider sx={{ mt: 2, mb: 2 }} />}
        {content.modal?.descriptionText && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1" component="p">
              {content.modal.descriptionText}
            </Typography>
          </Box>
        )}

        {content.modal?.callToActionLink && (
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" color={"info"} href={content.modal.callToActionLink} target="_blank">
              {content.modal.callToActionText ? content.modal.callToActionText : "Läs mer"}
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
