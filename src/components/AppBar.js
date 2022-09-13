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
                    sx={{ml: 2, mt: 2, mb: 1}}>
                        <img src={Logo} style={{width: 100, height: 100}} alt="Logo"></img>
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default Appbar;