var options = {
    series: [10, 30, 35],
    colors: ['#279CFF', '#FE5858', '#91E50B'],
    labels: ['Mans', 'Woman', 'Unknown'],
    dataLabels: { enabled: false, },
    chart: {
        fontFamily: 'Manrope',
        type: 'donut', width: '230px', height: '230px',
    },

    legend: { position: 'bottom', },
    plotOptions: {
        pie: {
            "donut": { "size": "55%" },
            startAngle: 20,
            endAngle: 380
        }

    },
}; var chart = new ApexCharts(document.querySelector("#gender"), options);
chart.render();

var optionsBots = {
    series: [10, 30, 35],
    colors: ['#279CFF', '#FE5858', '#91E50B'],
    labels: ['Humans', 'Unknown', 'Bots'],
    chart: {
        fontFamily: 'Manrope',
        type: 'donut', width: '230px', height: '230px',
    },
    dataLabels: { enabled: false },
    legend: { position: 'bottom', },
    plotOptions: {
        pie: {
            "donut": { "size": "55%" },
            startAngle: 20,
            endAngle: 380
        }

    },
}; var chartBots = new ApexCharts(document.querySelector("#bots"), optionsBots);
chartBots.render();

var scoreOptions = {
    series: [59],
    chart: {
        type: 'radialBar',
        fontFamily: 'Manrope',
        offsetY: -40,
        width: '100%',
        height: 500,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: { background: "#FDFDFD", },
            dataLabels: {
                show: true,
                name: {
                    offsetY: -25,
                    show: true,
                    color: '#141414',
                    fontSize: '24px',
                    fontWeight: 300,
                },
                value: {
                    offsetY: 50,
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#141414',
                    fontSize: '96px',
                    fontWeight: 700,
                    show: true,
                }
            },
        }
    },

    stroke: {
        lineCap: 'round'
    },
    grid: {
        padding: {
            top: -10
        }
    },
    fill: {
        type: 'gradient',
        colors: ['#000', '#EBA63E'],
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#EBA63E'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    labels: ['points'],
}; var score = new ApexCharts(document.querySelector("#score"), scoreOptions);
score.render();

var tagsOptions = {
    chart: {
        type: 'treemap',
        fontFamily: 'Manrope',
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
                { x: 'VK', y: 6 },
                { x: 'Коты', y: 6 }
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
    dataLabels: { style: { colors: ['#141414'] }, },
    stroke: {
        width: 5, // Ширина линии между элементами
        colors: ['#141414'] // Цвет линии
    }
}; var tags = new ApexCharts(document.querySelector("#tags"), tagsOptions);
tags.render();

