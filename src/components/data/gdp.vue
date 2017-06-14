<template>
    <div class="container" id="gdp">
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <img src="" alt="">
      </div>
      </div>

      <div class="row">
        <div class="col-sm-8 col-sm-offset-5">
          <div class="input-group">
            <input class="form-control" v-model="text" placeholder="input year eg.2015">
            <span class="input-group-btn">

              <button class="btn btn-secondary" type="button"  v-on:click="load">clear</button>
            </span>
          </div>
        </div>
      </div>

                <template v-if="seconds < 0">

                </template>
                <template v-else>
                  <p v-if="seconds"><small>Data coming in <b>{{seconds}}</b> second{{seconds > 1 ? 's' : ''}}...</small></p>
                </template>
                <figure><chart style="width:80%":options="bar" ref="bar" theme="ovilia-green" auto-resize></chart></figure>


    </div>
</template>
<script>
import axios from 'axios'
import ECharts from 'vue-echarts/components/ECharts.vue'

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'


import {initial as barInit} from './data/bar'


export default {
    components: {
        chart: ECharts
    },
  name: "gdp",
  data: function() {
      return{
          seconds: -1,
          bar: barInit,
      }
    },

    methods: {
        load: function load () {
          // simulating async data from server
          this.seconds = 1
          let bar = this.$refs.bar
          bar.showLoading({
            text: '正在加载',
            color: '#4ea397',
            maskColor: 'rgba(255, 255, 255, 0.4)'
          })
          let timer = setInterval(() => {
            this.seconds--
            if (this.seconds === 0) {
              clearTimeout(timer)
              bar.hideLoading()
              axios.get(API_URL+'data/gdp?year='+this.text+'&num=10').then(function(res){
                  console.log(res.data.gdp.length)
                  var categories = new Array()
                  var data = new Array()
                  for (var i = 0; i < 10; i++) {
                      categories.push(res.data.gdp[i]['economy'])
                      data.push(Number(res.data.gdp[i]['value']))
                  }
                  var asyncData = new Array()
                  asyncData = {'categories':categories, 'data':data}
                  let async = {
                    xAxis: {
                      data: categories
                    },
                    yAxis: {
                      axisLabel: {show: true}
                    },
                    series: [{
                      name: 'GDP',
                      data: data,
                    }]
                  }
                bar.mergeOptions(async)
            }.bind(this))
            }
          }, 1000)
        },
    }
}
</script>
<style>

</style>
