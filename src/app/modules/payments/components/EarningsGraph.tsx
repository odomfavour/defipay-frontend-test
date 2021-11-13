import React from 'react'
import Chart from 'react-apexcharts'

const EarningsGraph = () => {
    return (
        <div>
            <Chart type='area' height={400} series={[{
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
            }]} options={{ colors: ["#ff0000"], xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
              },  tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                }},
                stroke: {
                    curve: 'smooth'
                  }
                
                }}>
            </Chart>
        </div>
    )
}

export default EarningsGraph
