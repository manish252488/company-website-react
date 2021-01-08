import { Card, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../store/withReducer';
import TopNavBar from '../../common/TopNavBar';
import PieChart from './PieChart';
import reducer from './store/reducer/PieChartReducer';
import * as Actions from './store/actions';
const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },

    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 900,
        height: 500,
        marginTop: 20,
        background: '#3f51b5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
}))
const PieChartScreen = (props) => {
    const classes = useStyles();
    const user = useSelector(({ Auth }) => Auth.user.userName);
    const dispatch = useDispatch();
    const data = useSelector(({ PieChart }) => PieChart.data);

    useEffect(() => {
        dispatch(Actions.getData())
        // eslint-disable-next-line
    }, [])
    if (!data) {
        return <div>wait...</div>
    }
    const extractData = () => {
        let eData = []
        data.forEach(element => {
            let d = {
                name: element.title,
                y: element.comments
            }
            eData.push(d);
        });
        return eData;
    }
    return <div className={classes.root}>
        <TopNavBar title={`Welcome, ${user}!`} showLogoutButton={true} />
        <div className={classes.flex}>
            <Card
                className={classes.card}
                component={Paper}>
                <PieChart title="No of Comments on Issues" data={extractData()} />
            </Card>
        </div>
    </div>
}
export default withReducer('PieChart', reducer)(PieChartScreen);