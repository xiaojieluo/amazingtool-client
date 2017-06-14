<template lang="html">
  <div class="container" id="base85">
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <img src="" alt="">
    </div>
    </div>
      This is base85 component<br />
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
          <h5>base85: {{result.base85}}</h5>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'base85',

    data: function data(){
        return {
            types: ['base85', ''],
            text: '',
            result:[],
        }
    },

    methods: {

      inquire: function inquire() {
          console.log("inquire = "+this.text)
          console.log(this.types)
          axios.get(API_URL+'encode/'+this.text+'?type='+(this.types).join('|'))
          .then(function(res){
              console.log(res.data.data)
              this.result = res.data.data
              console.log(this.result)
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
