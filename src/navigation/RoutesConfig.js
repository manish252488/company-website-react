
import { useSelector } from 'react-redux';
import HomeScreenConfig from '../components/screens/HomeScreen/HomeScreenConfig';
import LoginConfig from '../components/screens/Login/LoginConfig';
import { generateRoutesFromConfigs } from './RoutesUtils';
const config = [
    HomeScreenConfig,
    LoginConfig
];

const routesConfig = [
    ...generateRoutesFromConfigs(config),
]
export default routesConfig;