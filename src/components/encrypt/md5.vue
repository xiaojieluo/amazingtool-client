<template lang="html">
  <div class="container" id="md5">

      This is md5s<br />
    <div class="row">
      <div class="col-sm-8 col-sm-offset-5">
        <div class="input-group">
          <input v-model="text" v-on:input="inquire" class="form-control" placeholder="input data...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">clear</button>
          </span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-10">
          <h5>md5: {{results.md5}}</h5>
      </div>
    </div>

  </div>
</template>

<script>
// import navBar from '@/components/navBar.vue'
import axios from 'axios'

export default {
    name:'md5',

    data: function data(){
        return {
            types: ['md5', ''],
            text: '',
            results:[],
        }
    },

    methods: {

      inquire: function inquire() {
          console.log("inquire = "+this.text)
          console.log(this.types)
          axios.get(API_URL+'encrypt/'+this.text+'?type='+(this.types).join('|'))
          .then(function(res){
              console.log(res.data.data)
              this.results = res.data.data
              console.log(this.results)
          }.bind(this));
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
