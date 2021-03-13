import Authpage from ".";
import authRoles from "../../config/authRoles";
/**
 *      {
 *        path: '/',
 *        exact: true,
 *        component: () => <div>component</div>
 *      }
 */
const AuthRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/auth",
      component: Authpage,
      exact: true,
    },
  ],
};
export default AuthRoutes;
