import authRoles from "../../../config/authRoles";
import PieChartScreen from "./PieChartScreen";

const PieChartConfig = {
    auth: authRoles.user2,
    routes: [
        {
            path: "/",
            component: PieChartScreen
        }
    ]
}
export default PieChartConfig;