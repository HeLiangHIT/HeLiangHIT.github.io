var myChart = echarts.init(document.getElementById('echart_map'));
var option =
{
    tooltip :
    {
        //   show: false //不显示提示标签
        formatter : '{b}', //提示标签格式
        backgroundColor : "#ff7f50", //提示标签背景颜色
        textStyle :
        {
            color : "#fff"
        } //提示标签字体颜色
    },
    series : [
        {
            type : 'map',
            mapType : 'china',
            label :
            {
                normal :
                {
                    show : true, //显示省份标签
                    textStyle :
                    {
                        color : "#c71585"
                    } //省份标签字体颜色
                },
                emphasis :
                { //对应的鼠标悬浮效果
                    show : true,
                    textStyle :
                    {
                        color : "#800080"
                    }
                }
            },
            itemStyle :
            {
                normal :
                {
                    borderWidth : .5, //区域边框宽度
                    borderColor : '#009fe8', //区域边框颜色
                    areaColor : "#ffefd5", //区域颜色
                },
                emphasis :
                {
                    borderWidth : .5,
                    borderColor : '#4b0082',
                    areaColor : "#ffdead",
                }
            },
            data : [
                {
                    name : '浙江',
                    selected : true
                } //浙江为选中状态
            ]
        }
    ],
};

myChart.setOption(option);
myChart.on('mouseover', function (params)
{
    var dataIndex = params.dataIndex;
    console.log(params);
}
);
