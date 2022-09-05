import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Feeds from "./data/Feeds.json";
import { useState } from 'react';


export default function Menu() {
    const[item, setItem]=useState(0)
    
  return (
    <>
{Feeds.map((data,key)=>{
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="180"
          image ={data.image}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price: {data.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>{setItem(item+1)}} style={{fontsize:50}} size="Larger">+</Button>
          <Button onClick={()=>{setItem(Math.max(item-1,0))}} size="Larger">-</Button>
        </CardActions>
      </Card>

    )
})}
   
    </>
  );
}
