import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Component({ i, event }) {
  console.log(event);
  const navigate = useNavigate();

  const handleView = (item) => {
    navigate(`/events/${item.EventID}`);
  };
  return (
    <Card
      sx={{
        minWidth: 400,
        height: 450,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="Event Image"
        image={event.ImageURL}
        title="Event Image"
        sx={{ height: 300, objectFit: "cover" }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Annual Tech Conference
          </Typography>
          <Typography variant="body2" color="text.secondary">
            June 15, 2024 - June 17, 2024
          </Typography>
        </div>
        <Button variant="outlined" size="small" sx={{ mt: 2 }} onClick={handleView}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
