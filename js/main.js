var options = {
    series: [35, 10, 30],
    labels: ['Mans', 'Woman', 'Unknown'],
    colors: ['#279CFF', '#FE5858', '#91E50B'],
    chart: { type: 'donut', },
    dataLabels: { enabled: false },
    legend: { position: 'bottom', },
    // chart: { width: '100%' }
};
var chart = new ApexCharts(document.querySelector("#gender"), options);
chart.render();

var optionsBots = {
    series: [35, 10, 30],
    labels: ['Bots', 'Humans', 'Unknown'],
    chart: { type: 'donut', },
    dataLabels: { enabled: false },
    legend: { position: 'bottom', },
    responsive: [{
        breakpoint: 100,
        options: {
            chart: { width: 200 },
            legend: { position: 'top' }
        }
    }]
};
var chartBots = new ApexCharts(document.querySelector("#bots"), optionsBots);
chartBots.render();


var options1 = {
    series: [50],
    chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#FDFDFD",
                strokeWidth: '100%',
            },
            dataLabels: {
                name: {
                    show: true
                },
                value: {
                    offsetY: 0,
                    fontSize: '14px'
                }
            }
        }
    },
    grid: {
        padding: {
            top: -10
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            colors: ['#279CFF', '#FE5858', '#91E50B'],
            shade: 'linear',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    labels: ['points'],
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


var options2 = {
    chart: {
        type: 'treemap',
        height: 350,
        toolbar: { show: false, },
    },
    series: [
        {
            data: [
                { x: 'Автомобили', y: 60 },
                { x: 'Крипта', y: 50 },
                { x: 'Ozon', y: 40 },
                { x: 'Спорт', y: 30 },
                { x: 'ЖК Утесов', y: 45 },
                { x: 'Халява', y: 25 },
                { x: 'Визание', y: 20 },
                { x: 'Фото', y: 15 },
                { x: 'Гонки', y: 10 },
                { x: 'Горы', y: 10 },
                { x: 'Дети', y: 10 },
                { x: 'VK', y: 5 },
                { x: 'Коты', y: 5 }
            ]
        }
    ],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false,
            colorScale: {
                ranges: [
                    {
                        from: 0,
                        to: 60,
                        color: '#FDFDFD'
                    }
                ]
            },
            borderRadius: 35 // Скругление углов
        }
    },
    dataLabels: {
        style: {
            colors: ['#141414']
        },
    },
    stroke: {
        width: 5, // Ширина линии между элементами
        colors: ['#141414'] // Цвет линии
    }

};

var tags = new ApexCharts(document.querySelector("#tags"), options2);
tags.render();
