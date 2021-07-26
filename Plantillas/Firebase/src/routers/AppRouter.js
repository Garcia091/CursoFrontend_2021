import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth'
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLooggedIn, setIsLooggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLooggedIn(true)

            } else {
                setIsLooggedIn(false)
            }
            setChecking(false)
        })

    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated ={isLooggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuthenticated ={isLooggedIn}
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
