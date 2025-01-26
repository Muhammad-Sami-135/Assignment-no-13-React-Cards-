import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard({ CardId, imgSrc, tilte, desc }) {
  const navi = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tilte}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {desc.slice(0, 82)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            navi(`/SinglepageData/${CardId}`);
          }}
        >
          view
        </Button>
      </CardActions>
    </Card>
  );
}
