import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routesConfig from './RoutesConfig';
import { generateRoutesFromConfigs } from './RoutesUtils';
export default function AppRoute(props) {
    const isAuthenticated = useSelector(({ Auth }) => Auth.isAuthenticated.status);
    const auth = useSelector(({ Auth }) => Auth.role);
    const config = [
        ...generateRoutesFromConfigs(routesConfig, auth),
    ]
    return (
        <>
            {config.map((value, index) => (
                <Route key={index} exact={true} path={value.path} component={value.component} />
            ))}
            {isAuthenticated ? null : <Redirect to="/login" />}
        </>
    )
}