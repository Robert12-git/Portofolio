import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './assets/pageLogo.png';

function Appbar(){
  return (
    <React.Fragment>
      <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: "none", md: "flex"}}}>
                        <img src={Logo} style={{width: 40, height: 40}} alt="Logo"></img>
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default Appbar;