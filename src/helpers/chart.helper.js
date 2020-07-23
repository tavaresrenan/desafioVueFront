const ChartHelper = {
    options() {
        return {
            scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    display: true
                  }
                }],
                xAxes: [ {
                  gridLines: {
                    display: false
                  }
                }]
              },
              legend: {
                display: false
              },
              responsive: true,
              maintainAspectRatio: false
        }
    }
}

export default ChartHelper;