import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://http2.mlstatic.com/D_NQ_NP_777678-MLA45504916270_042021-W.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Remeras
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Remera Essentials
        </Typography>
      </CardContent>
      <ItemCount stock={5}/>
    </Card>
  );
}

