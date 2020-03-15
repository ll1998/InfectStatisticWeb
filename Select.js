//下拉菜单选项处理
function func()
{ 
    var select=document.getElementById("select");
    var opt=select.value;           
    var subTitle=document.getElementById("date");
    document.getElementById("date").innerHTML="数据来源："+opt+"疫情病例统计";
    subTitle.style.color="grey";
    subTitle.style.fontSizeAdjust=3
    subTitle.style.fontFamily="等线"
    
    date=opt;
    //document.write(date);
    if(opt=="2020-01-19")
    {
        for(var i=0;i<data.length;i++){
            data[i].value=localStorage.getItem(data[i].name+'0119i');
            toolTipData[i].value=[{name:"现存确诊",value:data[i].value}];
            //document.write(toolTipData[i].name,'**',toolTipData[i].value);
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
}