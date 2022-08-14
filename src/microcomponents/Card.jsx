import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
const StyledCard = styled(Card)``;

export default function ImgMediaCard(props) {
  const { uri, heading, description } = props;
  return (
    <StyledCard sx={{ maxWidth: 345, margin: "2%" }}>
      <CardMedia component="img" alt="green iguana" height="140" image={uri} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore Now</Button>
      </CardActions>
    </StyledCard>
  );
}
