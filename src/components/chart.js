import React, { Component, Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

// Presentation Component Only
const chartView = (props) => {
    // Options according to API
    const options = {
        chart: {
            zoomType: 'x'
        },
        time: {
            useUTC: false
        },
        title: {
            text: '2D Connected Lines'
        },
        subtitle:{
            text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            // X - Axis Formatted here
            labels: {
                formatter: function (data) {
                    return moment(data.value).format("M/DD h A")
                }
            },
            tickInterval: 3600 * 1000,
            // reversed: true,
            title: {
                text: 'Time Intervals'
            }
        },
        yAxis: {
            title: {
                text: 'Random Values'
            }
        },
        // Change Tooltip Here
        tooltip: {
            formatter: function (f) {
                return `At ${moment(this.x).format("M/DD h A")} value is ${this.y}`
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'line',
            name: 'Value',
            data: props.random,
            pointStart: Date.now(),
            pointInterval: -3600 * 1000
        }]
    }
    // Highchart wrapper and update set to true for refresh
    return <HighchartsReact highcharts={Highcharts} options={options} update={true} />
}


export default chartView;