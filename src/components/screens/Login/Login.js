import { Button, Card, CardContent, CardHeader, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../store/withReducer';
import TopNavBar from '../../common/TopNavBar';
import reducer from './store/reducers/LoginReducer';
import * as Actions from './store/actions';
import History from '../../../@history';
const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    card: {
        width: 400,
        height: 300,
        margin: 'auto',
        marginTop: 100,
    }, button: {
        display: 'block',
        margin: 40,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column'
    }, title: {
        fontSize: 25,
        fontWeight: 700
    }
})
function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(({ Auth }) => Auth.isAuthenticated.status);
    if (isAuthenticated) {
        History.push('/')
    }
    const loginSuccess = () => {

    }
    const loginFailed = () => {

    }
    const handleLogin = () => {
        if (userName !== "" && password !== "")
            dispatch(Actions.login({ data: { userName: userName, password: password }, onSuccess: loginSuccess, onFailure: loginFailed }))
    }
    const renderLoginComponent = () => (
        <Card component={Paper} className={classes.card}>
            <CardContent className={classes.content}>
                <Typography component="h1" className={classes.title}>Login</Typography>
                <TextField
                    label="Username"
                    defaultValue={userName}
                    onChange={(ev) => setUserName(ev.target.value)} />
                <TextField
                    defaultValue={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    type="password"
                    label="Password" />
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={handleLogin}
                    className={classes.button}>Login</Button>
            </CardContent>
        </Card>
    )
    return <div className={classes.root}>
        <TopNavBar title="Login" />
        {renderLoginComponent()}
    </div>
}
export default withReducer('Auth', reducer)(Login)