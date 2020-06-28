import React, {useEffect} from 'react';
import ButtonAppBar from "./components/Navbar";
import MainPageContainer from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {downloadImages} from "./redux/actions";

const useStyles = makeStyles({
    container: {
        paddingTop: 40,
    }
});

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!localStorage.getItem('images')){
            localStorage.setItem ("images", JSON.stringify([]));
        } else {
            const images = localStorage.getItem('images');
            dispatch(downloadImages(JSON.parse(images)));
        }
    }, []);

    return (
        <div>
            <ButtonAppBar/>
            <Container maxWidth="sm" className={classes.container}>
                <Switch>
                    <Route exact path="/" component={MainPageContainer}/>
                    <Route path="/history" component={HistoryPage}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
