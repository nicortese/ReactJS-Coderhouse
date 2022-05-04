import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function MediaCard (props) {
  const {id,name,price,image}=props

  return (
    <Card id={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <ItemCount stock={5} product={props}/>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </Card>
  );
}

export default MediaCard;

