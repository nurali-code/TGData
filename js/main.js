document.querySelector('.btn__menu').addEventListener('click', () =>
    document.querySelectorAll('.nav, .btn__menu, body').forEach(el => el.classList.toggle('is_active'))
);

var options = {
    series: [10, 30, 35],
    colors: ['#279CFF', '#FE5858', '#91E50B'],
    labels: ['Mans', 'Woman', 'Unknown'],
    dataLabels: { enabled: true, },
    chart: {
        fontFamily: 'Manrope',
        type: 'donut', width: '240px', height: '240px',
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
        type: 'donut', width: '240px', height: '240px',
    },
    dataLabels: { enabled: true, },
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
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: '100%',
                height: '100%',
            },
        }
    }],
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
        padding: { top: -10 }
    },
    fill: {
        type: 'gradient',
        colors: ['#000', '#ffba52'],
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ffba52'],
            inverseColors: true,
            opacityFrom: .8,
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
        height: 400,
        toolbar: { show: false, },
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                height: 640,
            },
        }
    }],
    series: [
        {
            data: [
                { x: 'Автомобили', y: 60 },
                { x: 'Крипта', y: 40 },
                { x: 'Ozon', y: 45 },
                { x: 'Спорт', y: 30 },
                { x: 'ЖК Утесов', y: 45 },
                { x: 'Халява', y: 25 },
                { x: 'Визание', y: 20 },
                { x: 'Фото', y: 15 },
                { x: 'Гонки', y: 11 },
                { x: 'Горы', y: 12 },
                { x: 'Дети', y: 12 },
                { x: 'VK', y: 7 },
                { x: 'Коты', y: 7 }
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
            borderRadius: 25
        }
    },
    dataLabels: {
        style: { colors: ['#141414'] },
    },
    stroke: {
        width: 5, // Ширина линии между элементами
        colors: ['#141414'] // Цвет линии
    },

}; var tags = new ApexCharts(document.querySelector("#tags"), tagsOptions);
tags.render();

