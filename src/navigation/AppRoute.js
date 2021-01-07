import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import routesConfig from './RoutesConfig';
export default function AppRoute(props) {
    // const isAuthenticated = useSelector(({ Auth }) => Auth.isAuthenticated.status);
    const isAuthenticated = true;
    return (
        <>
            {routesConfig.map((value, index) => (
                <Route key={index} exact={true} path={value.path} component={value.component} />
            ))}
            {isAuthenticated ? null : <Redirect to="/login" />}
        </>
    )
}