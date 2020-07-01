import React, {useEffect} from 'react';
import ButtonAppBar from "./components/Navbar";
import MainPageContainer from "./pages/MainPage";
import HistoryPageContainer from "./pages/HistoryPage";
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {downloadImages} from "./redux/actions";
import storageApi from "./api/storageApi";

const useStyles = makeStyles({
    container: {
        paddingTop: 40,
    }
});

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(storageApi.getImages()){
            const images = storageApi.getImages();
            dispatch(downloadImages(images));
        }
    }, [dispatch]);  //

    return (
        <div>
            <ButtonAppBar/>

            {/*{!!error && <AlertError errorMessage={error}/>}*/}

            <Container maxWidth="sm" className={classes.container}>
                <Switch>
                    <Route exact path="/" component={MainPageContainer}/>
                    <Route path="/history" component={HistoryPageContainer}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
