"use client"
import React, { Component, useState } from "react"
import Chart from "react-apexcharts"

export default function ChartComponent({data, alert} : any) {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "line-chart",
        toolbar: {
          show: false,
        },
      },
      annotations: {
        xaxis: [
          {
            x: alert,
            borderColor: "#775DD0",
            label: {
              style: {
                color: "black",
              },
              text: "Alert Event",
            },
          },
        ],
      },
      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ],
        labels: {
          show: false,
        },
      },
      yaxis: {
        max: 100,
        min: 0,
        title: {
            text: "Level"
        }
      },
    },
    series: [
      {
        name: "series-1",
        data: data
      },
    ],
  })

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="300"
            height="250"
            
          />
        </div>
      </div>
    </div>
  )
}
