import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../store/withReducer';
import TopNavBar from '../../common/TopNavBar';
import { getData } from './store/actions';
import reducer from './store/reducer/HighChartReducer';
import Chart from './Histogram'
import dateFormat from 'dateformat';
const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1
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
const HighChart = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(({ HighChart }) => HighChart.data);
    const user = useSelector(({ Auth }) => Auth.user.userName)
    useEffect(() => {
        dispatch(getData());
        // eslint-disable-next-line
    }, [])
    if (!data) {
        return <div>wait...</div>
    }
    const extractData = () => {
        let comments = [], categories = [];
        data.forEach(element => {
            categories.push(dateFormat(element.created_at, 'fullDate'));
            comments.push(element.comments);
        });
        return { categories, comments };
    }
    return <div className={classes.root}>
        <TopNavBar
            title={`Welcome, ${user}!`}
            showLogoutButton={true}
        />
        <div className={classes.flex}>
            <Card
                className={classes.card}
                component={Paper}>
                <Chart title="Issue Created Date / No of Comments"
                    categories={extractData().categories}
                    comments={extractData().comments}
                    yAxisName="Comments"
                />
            </Card>
        </div>
    </div>
}
export default withReducer('HighChart', reducer)(HighChart);