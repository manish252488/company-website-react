import authRoles from "../../config/authRoles";
import Products from "./Products";
const ProductsRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/products",
      component: Products,
      exact: true,
    },
  ],
};
export default ProductsRoutes;
