import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Component({i , event}) {
    console.log(event.EventID)
    // const navigate = useNavigate();
    const formatDate = (isoString) => {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
    };

    const eventDate = event.EventDate;
    console.log(eventDate);
    // const handleView = (id) => {
    //   navigate(`/events/${id}`);
    // };

  return (
    <Card sx={{ minWidth: 400, height: 450, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt="Event Image"
        image={event.ImageURL}
        title="Event Image"
        sx={{ height: 300, objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {event.EventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDate(eventDate)}
          </Typography>
        </div>
        <Link to={`/events/${event.EventID}`}>
        <Button variant="outlined" size="small" sx={{ mt: 2 }} >
          View Details
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
