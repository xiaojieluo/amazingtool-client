<template lang="html">

  <div class="container" id="encode_all">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="" alt="">
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8 col-sm-offset-5">
        <div class="input-group">
          <input v-model="text" v-on:input="inquire" class="form-control" placeholder="input data...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button" v-on:click="clean">clean</button>
          </span>
        </div>
      </div>
    </div>

    <div v-for="type in types" v-if="results">
        <div class="row">
          <div class="col-md-10">
              <h5><router-link :to="{ name: type}">{{type}}</router-link>: {{ results[type] }}</h5>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
// 当 vue 没有匹配到 encode 的子路由时,显示此组件

// import navBar from '@/components/navBar.vue'
import axios from 'axios'

export default {
    name:'encode_all',

    data: function data(){
        return {
            types: ['base16', 'base32', 'base64', 'base85'],
            text: '',
            results: null,
        }
    },
    methods: {

      inquire: function inquire() {
          axios.get(API_URL+'encode/'+this.text+'?type='+(this.types).join('|'))
          .then(function(res){
              console.log(res.data)
              this.results = res.data.result
            //   console.log(this.results)
          }.bind(this));
      },
      clean: function clean(){
          this.results = null,
          this.text = null
      }
    }
}
</script>

<style lang="css">
.row{
    text-align: left;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}
</style>
