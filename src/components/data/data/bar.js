export let initial = {
  title: {
    text: '异步数据加载示例',
    show:true
  },
  tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
  legend: {
    data: ['GDP']
  },
  xAxis: {
    data: [],
    axisLabel:{
        interval:0
    }
  },
  yAxis: {
    axisLabel: {show: false}
  },
  series: [{
    name: 'GDP',
    type: 'bar',
    data: []
}],
grid: {
        left: '1%',
        right: '1%',
        bottom: '2%',
        containLabel: true
    },
}

let asyncData = {
  categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  data: [5, 20, 36, 10, 10, 20]
}

export let async = {
  xAxis: {
    data: asyncData.categories
  },
  yAxis: {
    axisLabel: {show: true}
  },
  series: [{
    name: '销量',
    data: asyncData.data
  }]
}
