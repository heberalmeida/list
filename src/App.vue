<template>
  <div id="app">
    <textarea v-model="text" cols="30" rows="5" />
    <br />
    <button @click.prevent="getList">Converter</button>
    <h4>Resultado</h4>
    <pre>{{result}}</pre>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      text: '',
      result: ''
    }
  },
  methods: {
    getList() {
      if(this.text) {
        this.result = this.text.match(/\d+.\d+,\d+.\d+/g).map((i,k) => {  
          if(k % 3 === 2) {
              return `${i}\n------------------\n`     
          } else {
              return `${i}\n` 
          }
        }).join('')
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
