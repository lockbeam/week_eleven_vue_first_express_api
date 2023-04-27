<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ helloMessage }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      helloMessage: ''
    }
  },
  props: {
    msg: String
  },
  // mounted is called as the Vue component comes onto the screen
  // nice place for initial set up and configurations, fetching data, etc
  // so a very good place to make our initial API call
  mounted() {
    this.$hello_api.getHelloMessage().then ( resp => {
      //getHelloMessage is a promise so must use then to get a response (which is JSON)
      this.helloMessage = resp.message
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
