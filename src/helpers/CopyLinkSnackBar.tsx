// components/CopyLinkSnackbar.tsx
import { Alert, Snackbar } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CopyLinkSnackbar({ open, onClose }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
        Länk kopierad!
      </Alert>
    </Snackbar>
  );
}
