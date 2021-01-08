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

export default function HighChart(props) {
    const [options, setOptions] = useState({
        chart: {
            type: 'column'
        },
        title: {
            text: props.title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: props.categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            }
        },
        series: [{
            name: props.yAxisName,
            data: props.comments

        }]
    });

    return (
        <Chart options={options} />
    );
}
HighChart.propTypes = {
    categories: PropTypes.array,
    comments: PropTypes.array,
    title: PropTypes.string,
    yAxisName: PropTypes.string,
    xAxisName: PropTypes.string
}
HighChart.defaultProps = {
    categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    comments: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 124.1, 95.6, 54.4],
    title: 'Histogram',
    yAxisName: 'data',
    xAxisName: 'x Axis Name'
}