
/*
   画饼图的通用方法
 */
var drawPieChart = function(data,colors){
   var chart = {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: {
                        text: ' '
                    },
                    tooltip: {
                        pointFormat: '{series.name} <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                color: '#000000',
                                connectorColor: '#000000',
                                formatter: function() {
                                    return '<b>' + this.point.name + '</b>: ' + this.percentage + '%';
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: ' ',
                        events: {
                            click: function(e) {

                            }
                        },
                        data: data,
                        colors: colors,
                        tooltip: {
                            pointFormat: '{series.name} <b>{point.percentage:.2f}%</b>'
                        }
                    }]
                };
    return chart;
}

/*
   画柱状图的通用方法
 */
var drawColumnChart = function(data){
	var seriesTemp=[];
    for(var i=0;i<data.series.length;i++){
    	if(i%2==0){
    		seriesTemp.push({color:'#2ec7c9',y:data.series[i]});
    	}else{
    		seriesTemp.push({color:'#b6a2de',y:data.series[i]});
    	}
    }
	var chart = {
                options:{
		        chart: {
                    type: 'column'
                },
                title: {
                    text: ' '
                },
                legend: {
                enabled: false
                }
                },
                credits: {
                enabled: false
                },
                subtitle: {
                    text: ' '
                },
                xAxis: {
                    categories: data.xAxis
                },
                yAxis: {
                    min: 0,
                    allowDecimals:false,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: "<span style='font-size:10px'>{point.key}</span><table>",
                    pointFormat: "<tr><td style='color:{series.color};padding:0'>{series.name}: </td>" +
                        "<td style='padding:0'><b>{point.y:.1f} mm</b></td></tr>",
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: data.name,
                    type: 'column',
                    data: seriesTemp
                }]
    };
    return chart;
}

/*
  画折线图的通用方法
 */
var drawSplineChart = function(data){
    var chart= {
            options : {
            chart: {
                type: "spline"
            },
            title: {
                text: null
            },
            legend: {
                enabled: false
            }
            },
            credits: {
                enabled: false
            },
            yAxis : {
                labels: {
                    enabled: false
                },
                min: 0,
                allowDecimals:false,
                title: {
                    text: ' '
                }
            },
            xAxis : {
                gridLineColor: "#64BFD5",
                gridLineWidth: 1,
                gridLineDashStyle: "Dash",
                categories: data.catogry
            },
            series : data.series
    }
    return chart;
}

/*
  画横放条形图的通用方法
 */
/*
var drawBarChart = function(data,height){
    var chart = {
        options : {
        chart: {
            type: 'bar',
            height: height
        },
        legend: {
            enabled: true,
            align: 'center',
            verticalAlign: 'top'
        },
        'plotOptions': {
            'series': {
                'dataLabels': {
                    'enabled': true,
                    'rotation': 0

                },
                "events": {
                    'legendItemClick': function () {
//                        selectSchoolSeries(this);
//                        return false;
                    }

                }
            }
        }
        },
        title : {
            text: null
        },
        yAxis : {
            title: {
                text: null,
                align: 'high'
            }
        },
        xAxis : {
            categories: data.categories
        },
        credits : {
            enabled: false
        },
        tooltip : {
            crosshairs: true,
            shared: true
        },
        series : data.series
    }
    return chart;
}
*/

/*
  分页的通用方法
  totalItems: 需要分页的总数据(数组)
  pageSize: 每一页数据的条数
  pageNo：请求的页数，第pageNo页
 */
var getPage = function(totalItems,pageSize,pageNo){

    //定义一个 Page 对象
    function Page(){
        this.totalItemsNum=totalItems.length;//数据总条数
        this.pageSize=pageSize;//每页显示条数
        this.maxPageNo=Math.ceil(this.totalItemsNum / this.pageSize);//最大页数
        this.pageNo=pageNo;//当前页码
        this.pageItems=[];//当前页的数据集
    }
    var page = new Page();
    for(var i =(pageNo-1)*pageSize;i<=pageNo*pageSize-1;i++){
        if(totalItems[i]!='' && totalItems[i]!=null){
            page.pageItems.push(totalItems[i]);
        }
    }
    return page;
}
