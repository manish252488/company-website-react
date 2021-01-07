import authRoles from "../../../config/authRoles";
import Login from "./Login";

const LoginConfig = {
    auth: authRoles.guest,
    routes: [
        {
            path: "/login",
            component: Login
        }
    ]
}
export default LoginConfig;