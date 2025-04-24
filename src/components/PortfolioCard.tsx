import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { PortfolioItem } from "./types/portfolio";

export default function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
}) {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="180"
        image={item.image.src}
        alt={"alt" in item.image ? item.image.alt : item.title}
        sx={{ objectFit: "cover", objectPosition: "top" }}
      />
      <CardContent sx={{ flexGrow: 1, px: 3, py: 2 }}>
        <Typography gutterBottom variant="h6">
          {item.title}
        </Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 2 }}>
        {item.modal ? (
          <Button size="small" variant="contained" color="success" onClick={() => onClick(item)}>
            Läs mer
          </Button>
        ) : (
          <Button startIcon={<LockOutlinedIcon />} disabled size="small" variant="contained">
            Läs mer (kommer snart)
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
