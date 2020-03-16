//下拉菜单选项处理
function func()
{ 
    var select=document.getElementById("select");
    var opt=select.value;           
    var subTitle=document.getElementById("date");
    subTitle.innerHTML="数据来源："+opt+"疫情病例统计";
    subTitle.style.color="grey";
    subTitle.style.fontFamily="等线";  
    date=opt;

    if(opt=="2020-01-19")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0119i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
        
    }
    else if(opt=="2020-01-20")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0120i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-21")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0119i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-22")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0122i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-23")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0123i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-24")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0124i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-25")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0125i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-26")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0126i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-27")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0127i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-28")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0128i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-29")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0129i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-30")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0130i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-01-31")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0131i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-02-01")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0201i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    else if(opt=="2020-02-02")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0202i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
        }
    }
    console.log(data)
    console.log(toolTipData)
    var max = 480,
    min = 9; // todo 
    var maxSize4Pin = 100,
    minSize4Pin = 20;
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };

    option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    var toolTiphtml = ''
                    for(var i = 0;i<toolTipData.length;i++){
                        if(params.name==toolTipData[i].name){
                            toolTiphtml += toolTipData[i].name+':<br>'
                            for(var j = 0;j<toolTipData[i].value.length;j++){
                                toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                            }
                        }
                    }
                    console.log(toolTiphtml)
                    return toolTiphtml;
                } else {
                    var toolTiphtml = ''
                    for(var i = 0;i<toolTipData.length;i++){
                        if(params.name==toolTipData[i].name){
                            toolTiphtml += toolTipData[i].name+':<br>'
                            for(var j = 0;j<toolTipData[i].value.length;j++){
                                toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                            }
                        }
                    }
                    console.log(toolTiphtml)
                    return toolTiphtml;
                }
            }
        },
        dataRange:{//颜色的设置  dataRange
                x: 'left',
                y: 'center',    
                splitList: [
                    {start: 1000,color:'#880000',label:'>1000'},
                    {start: 500, end: 999,color:'FF0000',label:'500-999'},
                    {start: 100, end: 499,color:'#FF3333',label:'100-499'},
                    {start: 10, end: 99,color:'#FF8888',label:'10-99'},
                    {start: 1, end: 9,color:'#FFCCCC',label:'1-9'},
                    {start: 0, end: 0 , color: 'white',label:'0'},
                ],
                text:['高','低'],// 文本，默认为数值文本      
        },
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {//高亮颜色设置
                    areaColor: '#FFFF00',
                }
            }
        },
        series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9'
                    }
                }
            },
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: 'red'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },

        ]
    };
    myChart.setOption(option);
        //鼠标悬浮事件
        myChart.on('mouseover', function (params) {
            var dataIndex = params.dataIndex;
            console.log(params);
        });
        //鼠标单击事件
        myChart.on('click', function (params) {
            // console.log(params)
            window.open(encodeURIComponent(params.name)+'.html');
        });
}
