import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import authRoles from "../config/authRoles";
import routesConfig from "./RoutesConfig";
import { generateRoutesFromConfigs } from "./RoutesUtils";
export default function AppRoute(props) {
  const isAuthenticated = useSelector(({ Auth }) =>
    Auth.isAuthenticated ? Auth?.isAuthenticated : false
  );
  const auth = useSelector(({ Auth }) =>
    isAuthenticated ? Auth.role : authRoles.guest[0]
  );
  console.log(isAuthenticated);
  const config = [...generateRoutesFromConfigs(routesConfig, auth)];
  return (
    <>
      {config.map((value, index) => (
        <Route
          key={index}
          exact={true}
          path={value.path}
          component={value.component}
        />
      ))}
    </>
  );
}
