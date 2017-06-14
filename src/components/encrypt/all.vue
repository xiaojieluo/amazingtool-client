<template lang="html">

  <div class="container" id="encrypt_all">



    <div class="row">
      <div class="col-md-10 col-md-offset-12">
        <div class="input-group">
          <input v-model="text" v-on:input="inquire" class="form-control" placeholder="input text...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button" v-on:click="clean">clean</button>
          </span>
        </div>
      </div>
    </div>

    <div v-for="type in types">
        <div class="row">
          <div class="col-md-10">
              <h5 v-if="results[type]">{{type}}: {{ results[type] }}</h5>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// 当 vue 没有匹配到 encode 的子路由时,显示此组件

import axios from 'axios'

export default {
    name:'encrypt_all',

    data: function data(){
        return {
            types: ['md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512'],
            text: '',
            results:[],
        }
    },
    // computed:{
    //     md5Plus:{
    //         set: function(value){
    //             return this.result.md5+value
    //         }
    //     },
    //     sha256Plus:{
    //         set: function(value){
    //             return this.result.sha256+value
    //         }
    //     }
    // },
    methods: {
        // getmd5: function getmd5(text){
        //     // 请求 md5 加密 api
        //     console.log(text+'get md5 attr')
        //     axios.get(API_URL+'encode/md5?text='+text)
        //     .then(function(res){
        //         console.log(this.result.md5 = res.data.data.result)
        //         return res.data.data
        //     }.bind(this));
        // },
        //
        // getSha256: function getSha256(text){
        //     // 请求 sha256 加密 api
        //     console.log(text+'get md5 attr')
        //
        //     axios.get(API_URL+'encode/sha256?text='+text)
        //     .then(function(res){
        //         console.log(this.result.sha256 = res.data.data.result)
        //         return res.data.data
        //     }.bind(this));
        // },

      inquire: function inquire() {
        //   console.log("inquire = "+this.text)
        //   console.log(this.types)
          axios.get(API_URL+'encrypt/'+this.text+'?type='+(this.types).join('|'))
          .then(function(res){
            //   console.log(res.data)
              this.results = res.data.result
              console.log(this.results)
          }.bind(this));
        //   axios.all([this.getmd5(this.text), this.getSha256(this.text)])
        //   .then(axios.spread(function (acct, perms){
        //       console.log("all done")
        //   }));
        //   axios.get(API_URL+'encode/md5?text='+this.text)
        //   .then(function(res){
        //     //   console.log(res.data)
        //     //   this.md5.$set(res.data.data)
        //       console.log(this.md5 = res.data.data)
        //   }.bind(this))
    },
      clean: function clean(){
          this.results = [],
          this.text = ''
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
