import React from 'react';
import ButtonAppBar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";

const useStyles = makeStyles({
    container: {
        paddingTop: 40,
    }
});

function App() {
    const classes = useStyles();
    return (
        <div>
            <ButtonAppBar/>
            <Container maxWidth="sm" className={classes.container}>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/history" component={HistoryPage}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
