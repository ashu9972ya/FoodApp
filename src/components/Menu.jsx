import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Feeds from "./data/Feeds.json";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import styled from "styled-components";
import { tooltipClasses } from '@mui/material';



const StyledMenu = styled.div`
  height: 100%;
  width: 67%;
  margin: 65px 0 0 20px;
  background: #fff;
  padding: 5px 20px 20px 20px;
  display: "flex";
`;
export default function Menu() {
  const[value, setValue]=useState(1) 
  return (
    <StyledMenu>
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
          <Typography variant="body2" color="text.secondary">
            Total={value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cost(INR):100
          </Typography>
        </CardContent>
        <CardActions>
         <button> <AddIcon fontSize="small"  onClick={()=>{setValue(value+1)}} disabled={value===1}  /></button>
         <button><RemoveIcon fontSize="small"  onClick={()=>{setValue(Math.max(value-1,0))}} /></button>
        </CardActions>
      </Card>

    )
})}
   
    </>
    </StyledMenu>
  );
}
