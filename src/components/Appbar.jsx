import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

export default function Appbar() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton onClick={() => setCartOpen(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <RestaurantIcon/>
          </IconButton>
          <IconButton  color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <ShoppingCartIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Food's Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}