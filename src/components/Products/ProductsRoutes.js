import authRoles from "../../config/authRoles";
import Products from "./Products";
const ProductsRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/services",
      component: Products,
      exact: true,
    },
  ],
};
export default ProductsRoutes;
