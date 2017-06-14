<template>
    <nav class="navbar navbar-light bg-faded rounded navbar-toggleable-md" id="navBar">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <router-link class="navbar-brand" :to="{ name: 'index'}">AmazingTool</router-link>

            <div class="collapse navbar-collapse" id="containerNavbar">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Code</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <router-link class="dropdown-item" :to="{ name: 'encrypt'}">Encrypt</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'decrypt'}">Decrypt</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'encode'}">Encode</router-link>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Query</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <router-link class="dropdown-item" :to="{ name: 'ip'}">Ip</router-link>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Data</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <router-link class="dropdown-item" :to="{ name: 'gdp'}">GDP</router-link>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: "navBar",
  data: function data() {
    return {
        data: {
            'title':'Awesome tool',
            'home':'Home',
        },
        apis: []
    }
},
mounted: function mounted() {
  //do something after mounting vue instance
    axios.get(API_URL)
    .then(function(res) {
        this.apis = res.data.data
        console.log(res.data.data)
    }.bind(this))
    .catch(function(error){
        console.log(error)
    });
  }

}
</script>

<style lang="css">
</style>
