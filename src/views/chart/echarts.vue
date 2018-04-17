<template>
  <section class="chart-container">
      <el-row>
          <el-col :span="12">
              <div id="chartBarColumn" style="width:100%;height:400px"></div>
          </el-col>
          <el-col :span="12">
              <div id="chartBar" style="width:100% ;height:400px"></div>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
              <div id="chartLine" style="width:100%;height:400px;"></div>
          </el-col>
          <el-col :span="12">
              <div id="chartPie" style="width:100%;height:400px;"></div>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
              <a href="http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all" id="" target="_blank" style="float:right">more>></a>
          </el-col>
      </el-row>
  </section>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
      return{
        chartBarColumn:null,
        chartBar:null,
        cahrtLine:null,
        chartPie:null
      }
  },
  mounted () {
      this.drawCharts()
  },
  updated () {
      this.drawCharts()
  },
  methods: {
      drawChartBarColumn(){
        // 基于准备好的dom，初始化echarts实例
        this.chartBarColumn=echarts.init(document.getElementById('chartBarColumn'))
        // 绘制图表1
        this.chartBarColumn.setOption({
            title: { 
                text: '柱状图测试' ,
                textStyle:{
                    color:'#fff',
                    fontWeight:'normal'
                },
                left:'center',
                padding:[30,5,30,5]
            },
            xAxis:{
               data: ['涉恐人员', '涉稳人员', '涉毒人员', '在逃人员', '刑事犯罪\n前科、劣迹人员', '肇事肇祸\n精神病人', '重点上访\n人员'],
               axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    color: '#57617B',
                    fontSize: 14,
                }
            },
            yAxis:{
                name: "（人）",
                nameTextStyle: {
                    color: '#57617B',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    color: '#57617B',
                    fontSize: 16
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            series:[
                {
                    type:'bar',
                    barWidth: 18,
                    itemStyle:{
                        normal:{
                            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00e9db'
                            }, 
                            {
                                offset: 0.8,
                                color: '#34da62'
                            }], false)
                        }
                    },
                    data:[254, 3254, 1654, 2454, 4757, 2011, 1211]
                }
            ]
        })
      },
      drawChartBar(){
          //初始化实例
          this.chartBar=echarts.init(document.getElementById('chartBar'))
          this.chartBar.setOption({
              title:{
                text:'堆叠条形图',
                textStyle:{
                    color:'#fff',
                    fontWeight:'normal'
                },
                left:'center',
                padding:[30,5,30,5]
              },
              legend:{
                top: 20,
                right:10,
                textStyle:{
                    color:'#fff',
                },
                data: ['钥匙量', '有效房源量']
              },
              tooltip:{
                show:'true',
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle:{
                    align:'left'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
              },
              xAxis:{
                type:'value',
                axisTick : {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                splitLine: {
                    show: false
                }
              },
              yAxis:[
                    {
                        type:'category',
                        axisTick : {show: false},
                        axisLine: {
                            show: false,
                            lineStyle:{
                                color:'#57617B',
                            }
                        },
                        data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
                    },
                    {
                        type:'category',
                        axisTick : {show: false},
                        axisLine:{show:false},
                        axisLabel:{show:false},
                        axisArea:{show:false},
                        splitLine: {show:false},
                        data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
                    }
                ],
                series:[
                    {
                        name:'有效房源量',
                        type: 'bar',
                        yAxisIndex:1,
                        itemStyle:{
                            normal:{
                                show: true,
                                color:'#277ace',
                                barBorderRadius:50,
                                borderWidth:0,
                                borderColor:'#333',
                            }
                        },
                        barGap:'0%',
                        barCategoryGap:'50%',
                        data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
                    },
                    {
                        name:'钥匙量',
                        type:'bar',
                        itemStyle:{
                            normal: {
                                show: true,
                                color: '#5de3e1',
                                barBorderRadius:50,
                                borderWidth:0,
                                borderColor:'#333',
                            }
                        },
                        barGap:'0%',
                        barCategoryGap:'50%',
                        data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
                    }
                ]
          })
      },
      drawChartLine(){
          this.cahrtLine=echarts.init(document.getElementById('chartLine'))
          this.cahrtLine.setOption({
              title:{
                  text:'折线图测试',
                  textStyle:{
                      color:'#fff',
                      fontWeight:'normal'
                  },
                  left:'center',
                  padding:[10,5,30,5]
              },
              tooltip:{
                trigger:'axis',
                axisPointer:{
                    lineStyle:{
                        color:'#57617B'
                    }
                },
                textStyle:{
                    align:'left'
                }
              },
              legend: {
                    icon: 'rect', 
                    itemWidth: 14, 
                    itemHeight: 5, 
                    itemGap: 13, 
                    data: ['移动', '电信', '联通'],
                    right: '4%',
                    textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                    }
                },
              xAxis: [{
                    type: 'category',
                    boundaryGap: false, 
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
                }],
              yAxis: [{
                    type: 'value', 
                    name: '单位（%）',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10, 
                        textStyle: {
                            fontSize: 14 
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                }],
              series: [
                  {
                    name: '移动',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle', 
                    symbolSize: 5,
                    showSymbol: false, 
                    lineStyle: {
                        normal: {
                            width: 1 
                        }
                    },
                    areaStyle: { 
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, 
                                color: 'rgba(137, 189, 27, 0.3)'
                            }, {
                                offset: 0.8, 
                                color: 'rgba(137, 189, 27, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10 
                        }
                    },
                    itemStyle: { 
                        normal: {
                            color: 'rgb(137,189,27)',
                            borderColor: 'rgba(137,189,2,0.27)',
                            borderWidth: 12

                        }
                    },
                    data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
                }, 
                {
                    name: '电信',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 136, 212, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 136, 212, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 12

                        }
                    },
                    data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
                }, 
                {
                    name: '联通',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(219, 50, 51, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(219, 50, 51, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: 'rgb(219,50,51)',
                            borderColor: 'rgba(219,50,51,0.2)',
                            borderWidth: 12
                        }
                    },
                    data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
                }
            ]
          })
      },
      drawChartPie(){
        this.chartPie=echarts.init(document.getElementById('chartPie'))
        let scale=1
        let echartData=[
            {
                value: 2154,
                name: '曲阜师范大学'
            }, 
            {
                value: 3854,
                name: '潍坊学院'
            }, 
            {
                value: 3515,
                name: '青岛职业技术学院'
            }, 
            {
                value: 3515,
                name: '淄博师范高等专科'
            }, 
            {
                value: 3854,
                name: '鲁东大学'
            }, 
            {
                value: 2154,
                name: '山东师范大学'
            }
        ]  
        let rich={
            yellow:{
                color:'#ffc72b',
                fontSize:30 * scale,
                padding:[5,4],
                align:'center'
            },
            total:{
                color:'#ffc72b',
                fontSize:40*scale,
                align:'center'
            },
            white:{
                color:'#fff',
                fontSize:14*scale,
                padding:[21,0],
                align:'center'
            },
            blue: {
                color: '#49dff0',
                fontSize: 16 * scale,
                align: 'center'
            },
            hr: {
                borderColor: '#0088de',
                width: '100%',
                borderWidth: 1,
                height: 0,
            }
        } 
        this.chartPie.setOption({
            title:{
                text:'总考生数',
                left:'center',
                top:'53%',
                padding:[24,0],
                textStyle:{
                    color:'#fff',
                    fontSize:18*scale,
                    align:'center'
                }
            },
            legend: {
                selectedMode:false,
                formatter: function(name) {
                    var total = 0;
                    var averagePercent;
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    return '{total|' + total + '}';
                },
                data: [echartData[0].name],
                left: 'center',
                top: 'center',
                icon: 'none',
                align:'center',
                textStyle: {
                    color: "#fff",
                    fontSize: 16 * scale,
                    rich: rich
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)",

            },
            series:[
                {
                    name: '总考生数量',
                    type: 'pie',
                    radius: ['42%', '50%'],
                    hoverAnimation:false,
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    label:{
                        normal:{
                            formatter:function(params, ticket, callback){
                                var total=0;
                                var percent=0;
                                echartData.forEach(function(currentValue,index,arr){
                                    total+=currentValue.value
                                })
                                percent=((params.value/total)*100).toFixed(1)
                                return '{white|'+params.name+'}\n{hr|}\n{yellow|'+params.value+'}\n{blue|'+percent+'%}'
                            },
                            rich:rich
                        }
                    },
                    labelLine:{
                        normal: {
                            length: 55 * scale,
                            length2: 0,
                            lineStyle: {
                                color: '#0088de'
                            }
                        }
                    },
                    data: echartData
                }
            ]
        })
      },
      drawCharts(){
          this.drawChartBarColumn()
          this.drawChartBar()
          this.drawChartLine()
          this.drawChartPie()
      }
  }
}
</script>

<style scoped>
    .chart-container{
        width: 100%;
        background: #394056;
        margin-top:25px;
        padding-bottom: 25px;
        
    }
    .chart-container .el-row{
        margin-bottom: 25px;
    }
    .chart-container .el-row a{
        color: #fff;
        padding:0 20px 0 0;
        font-size: 16px;
    }
    .chart-container .el-row a:hover{
        color: #0088de
    }
</style>

