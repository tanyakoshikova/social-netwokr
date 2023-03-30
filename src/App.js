import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {withRouter} from "./components/Profile/ProfileContainer";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer= React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/login'));

class App extends React.Component {

    catchAllUnhandleErrors = () => {
        console.log("Some error occured");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/dialogs/" element={<DialogsContainer />} />
                        <Route path="/profile/" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<Music/>}/>
                        <Route path="/settings/" element={<Settings/>}/>
                        <Route path="/users/" element={<UsersContainer/>}/>
                        <Route path="/login/" element={<Login/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
    withRouter,
    connect (mapStateToProps,{initializeApp}) )(App);

const SamuraiJSApp = () => {
  return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default SamuraiJSApp;