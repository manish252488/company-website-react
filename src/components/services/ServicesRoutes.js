import authRoles from "../../config/authRoles";
import Services from "./Services";
const ServicesRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/services",
      component: Services,
      exact: true,
    },
  ],
};
export default ServicesRoutes;
