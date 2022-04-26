import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header";
import "./styles.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

export function App(){
    const [isLoggedIn, setLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
            Is logged in? {JSON.stringify(isLoggedIn)}
            <div className="App">
                <Router>
                    <Header/>
                    <h1>TESTING</h1>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);