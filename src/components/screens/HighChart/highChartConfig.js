import authRoles from "../../../config/authRoles";
import HighChart from "./HighChart";

const HighChartConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: "/",
            component: HighChart
        }
    ]
}
export default HighChartConfig;