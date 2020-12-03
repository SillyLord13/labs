let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazno-Narrows Bridge","Golden Gate Bridge","Mackniac Bridge","George Washington Bridge","Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Span (meters)',
            data: [1298.4,1280.2,1158.0,1607.0,853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green','purple']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
