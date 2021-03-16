import AuthRoutes from "../components/auth/Auth.routes";
import ContactRoutes from "../components/contact/ContactRoutes";
import HomeRoutes from "../components/home/Home.routes";
import NotFoundRoutes from "../components/not-found/NotFound.routes";
import ProductsRoutes from "../components/Products/ProductsRoutes";

const routesConfig = [
  HomeRoutes,
  AuthRoutes,
  NotFoundRoutes,
  ContactRoutes,
  ProductsRoutes,
];

export default routesConfig;
