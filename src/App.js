import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Main View
                </Typography>
            </Toolbar>
        </AppBar>
        <div>
    <Button  href="#" target="_blank" variant="contained" color="primary">
      Contact
    </Button>
    </div>
        </div>
    );
}



export default NavBar;