import authRoles from "../../../config/authRoles";
import HomeScreen from "./HomeScreen";

const HomeScreenConfig = {
    auth: authRoles.guest,
    routes: [
        {
            path: "/",
            component: HomeScreen
        }
    ]
}
export default HomeScreenConfig;