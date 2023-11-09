// Sample code to generate a GPA chart using Chart.js
const ctx = document.getElementById('gpaChart').getContext('2d');
const gpaChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4', 'Sem5'],
        datasets: [{
            label: 'GPA',
            data: [9.733,9.095],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 4.0,
            },
        },
    },
});
