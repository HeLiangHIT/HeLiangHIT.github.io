/* 出生率、死亡率、增长率折线图 */
var dom = document.getElementById("echart_demo");
var myChart = echarts.init(dom);
var app = {};
app.title = '折柱混合';
option = {

    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['出生率‰','死亡率‰','增长率‰']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1955','1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'出生率‰',
            type:'line',
            data:[32.6,20.86,37.88,33.43,23.01,17.82,18.21,17.8,21.06,17.12,14.03,12.4,11.9,12.07]
        },
        {
            name:'死亡率‰',
            type:'line',
            data:[12.28,25.43,9.5,7.6,7.32,6.21,6.34,6.57,6.67,6.57,6.45,6.51,7.11,7.11]
        },
        {
            name:'增长率‰',
            type:'line',
            data:[20.32,-4.57,28.38,25.83,15.69,11.61,11.87,11.23,14.39,10.55,7.58,5.89,4.79,4.96]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}