
$(document).ready(function() {
    $('#first_chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges', 'Pears', 'Grapes']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4, 5, 6]
        }, {
            name: 'John',
            data: [5, 7, 3, 6, 7]
        }]
    });
});