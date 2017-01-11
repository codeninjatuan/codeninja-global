/*------------------------------------------------------------------

Theme:                   Bowline HTML5 Template
Version:                 1.0
Author:                  SinkLab
Support:                 http://themeforest.net/user/SinkLab

File Description:        Options for Charts. Plugin: "chartjs"

------------------------------------------------------------------*/

    
//line graph    
var ctx = document.getElementById("myLine");
var myLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Flow Result",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#1ABC9C",
                borderColor: "#1ABC9C",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#1ABC9C",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 10, 40, 30, 50, 60, 80],
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//bar chart
var ctx = document.getElementById("myBar");
var myBar = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Flow Result",
            backgroundColor: "rgba(26, 188, 156, 0.2)",
            borderColor: "#1ABC9C",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(26, 188, 156, 0.4)",
            hoverBorderColor: "#1ABC9C",
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
},
    options: {
        scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
});


//radar chart
var ctx = document.getElementById("myRadar");
var myRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 20]
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(26, 188, 156, 0.2)",
                borderColor: "#1ABC9C",
                pointBackgroundColor: "#1ABC9C",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#1ABC9C",
                data: [28, 48, 40, 39, 26, 27, 70]
            }
        ]
    },
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }
});


//polar chart
var ctx = document.getElementById("myPolar");
var myPolar = new Chart(ctx, {
    data: {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#1ABC9C",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    },
    type: 'polarArea',
    options: {
        elements: {
            arc: {
                borderColor: "#fff"
            }
        }
    }
});


//pie chart
var ctx = document.getElementById("myPie");
var myPie = new Chart(ctx,{
    type: 'pie',
    data: {
        labels: [
            "Green",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#1ABC9C",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#1ABC9C",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    }
});


//doughnut chart
var ctx = document.getElementById("myDoughnut");
var myDoughnut = new Chart(ctx,{
    type: 'doughnut',
    data: {
        labels: [
            "Green",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#1ABC9C",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#1ABC9C",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    }
});
