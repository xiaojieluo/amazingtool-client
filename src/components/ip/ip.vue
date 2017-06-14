<template>
  <div id="ip" class="container">
    <div class="row">
      <div class="col-sm-8 col-sm-offset-5">
        <div class="input-group">
          <input v-model="ip" class="form-control" placeholder="input ip or domain...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" v-on:click="inquire">clear</button>
          </span>
        </div>
      </div>
    </div>
    <div class="row" v-if="result">
        <div class="col-md-12">
            <h4>Query result</h4>
        </div>
        <div class="col-md-12">
            <hr />
        </div>

        <div class="col-md-12">
            <h5><span class="right">IP</span>: {{ result.query }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Country</span>: {{ result.country }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Country code</span>: {{ result.countryCode }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Region</span>: {{ result.regionName }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Region code</span>: {{ result.region}}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">City</span>: {{ result.city }}</h5>
        </div>
        <div class="col-md-12">
            <h5 v-if="result.zip"><span class="right">Zip code</span>: {{ result.zip}}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Latitude</span>: {{ result.lat }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Longitude</span>: {{ result.lon }}</h5>
        </div>
        <div class="col-md-12">
            <h5><span class="right">Timezone</span>: {{ result.timezone }}</h5>
        </div>
        <div class="col-md-6">
            <h5><span class="right">ISP</span>: {{ result.isp }}</h5>
        </div>
        <div class="col-md-6">
            <h5 v-if="result.oragnization"><span class="right">Oragnization</span>: {{ result.oragnization }}</h5>
        </div>

            <h5 v-if="result.as"><span class="right">As number/name</span>: {{ result.as }}</h5>
        </div>
<!--</transition>-->

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ip',
    data() {
        return {
            ip:'',
            result: null,
        }
    },
    methods: {
      inquire: function inquire() {
          console.log(this.ip)
          axios.get(API_URL+'ip/'+this.ip+'?type=json')
          .then(function(res){
              console.log(res.data)
              this.result = res.data
              console.log(this.result)
          }.bind(this));
      }
  }
}
</script>

<style>
.right {
    text-align: right;
}
.amap-wrapper {
    display:block;
  /*width: 100%;*/
  height:600px;
  /*min-height: 0;*/
  /*margin: auto;*/
  float: none;
  /*margin-left: 200px;*/
  /*text-align: center*/
}
</style>
