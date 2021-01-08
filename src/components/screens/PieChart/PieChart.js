import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
function Chart(props) {
    const chartContainer = React.createRef();
    const [chart, setChart] = useState(null);
    useEffect(() => {
        setChart(new Highcharts[props.type || 'Chart'](
            chartContainer.current,
            props.options
        ));
        // eslint-disable-next-line
    }, [])
    return <div ref={chartContainer} />;
}

export default function PieChart(props) {
    const [options, setOptions] = useState({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: props.title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: props.data
        }]
    });

    return (
        <Chart options={options} />
    );
}
PieChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
}
PieChart.defaultProps = {
    data: [{
        name: 'Chrome',
        y: 61.41
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }],
    title: 'PieChart'
}