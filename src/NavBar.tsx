import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './Home';
import './App.css'
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
    btn: {
      color: 'white',
      textDecoration: 'none',
      fontSize: 18
    },
  }));
function NavBar() {
    const classes = useStyles();
    
    return (
        <div> 
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
              SpaceX
            </Typography>
            <Link to="/spaceMissions">
            <Button className={classes.btn}>Missions</Button>

            </Link>
           
          </Toolbar>
        </AppBar>
      </div>
      
      </div>
    )
}

export default NavBar
