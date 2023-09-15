import React, {useState} from 'react';
import {AppBar, Box, IconButton, Drawer,  Toolbar, Typography, Divider} from '@mui/material';
import Logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography 
       color={'goldenrod'} 
       variant="h6" 
       component="div" 
       sx={{flexGrow:1 }}
        >
         <img src={Logo} alt="logo" height={"70"} width="200" />
        </Typography>
        <Divider/>
       
         <ul className="mobile-navigation">
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
         </ul>
        </Box>
   
  )
  return (
    <>
      <Box>
       <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" 
          sx={{
            mr:2,
            display:{ sm: "none"},

          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>                                                        
       <Typography 
       color={'goldenrod'} 
       variant="h6" 
       component="div" 
       six={{flexGrow:1}}
        >
       
       <img src={Logo} alt="logo" height={"70"} width="250" />
        </Typography>
        <Box sx={{display:{xs: "none", sm: "block"}}}>
         <ul className="navigation-menu">
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
         </ul>
        </Box>
        </Toolbar>
   
       </AppBar>
       <Box component='nav'>
        <Drawer variant="temporary"
         open={mobileOpen} 
        onClose={handleDrawerToggle}
        sx={{
          display: {xs : "block", sm: "none"},
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
        }}
        
        >
          {drawer}
        </Drawer>

       </Box>
       <Box >

       
       <Toolbar/>
      </Box>
      </Box>
      

    </>
  )
}

export default Header
