import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const NavBar = ()  => {
    const [anchorEl, setAnchorEl] = useState(null)
    const classes = useStyles();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }
      const handleClose = () => {
    setAnchorEl(null);
  }

    return(
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
            edge='start' 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={handleClick}
            >
              <MenuIcon 
              />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Create List</MenuItem>
              <MenuItem onClick={handleClose}>Edit List</MenuItem>
              <MenuItem onClick={handleClose}>Delete List</MenuItem>
              <MenuItem onClick={handleClose}>Back</MenuItem>
            </Menu>
            <Typography 
            variant="h6"
            size= 'Large' 
            className={classes.title}>
              To Do List
            </Typography>
            <Button color="inherit">Share</Button>
          </Toolbar>
        </AppBar>
        </div>
    ) //Return
} //NavBar

export default NavBar