import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link:{
            color: 'white',
            textDecoration: 'none',
            marginLeft: 20,
            fontSize: '1.25rem',
            fontWeight: 500,
            letterSpacing: '0.0075em'
        }
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ImageIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Images
                    </Typography>
                    <Link className={classes.link} to={'/'}>Главная</Link>
                    <Link className={classes.link} to={'/history'}>История</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}