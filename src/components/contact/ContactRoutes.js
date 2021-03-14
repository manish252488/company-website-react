import authRoles from "../../config/authRoles";
import Contact from "./Contact";
const ContactRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/contacts",
      component: Contact,
      exact: true,
    },
  ],
};
export default ContactRoutes;
