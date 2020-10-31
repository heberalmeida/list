<template>
  <div id="app">
    <h3>Só Coordenadas</h3>
    <h3>Solo coordenadas</h3>
    <h3>OnlyCoordinate</h3>
    <textarea v-model="text" cols="30" rows="5" />
    <br />
    <button @click.prevent="getList">Converter</button>
    <button @click.prevent="getEmpty">Limpar</button>
    <h4 v-if="result.lenght">Result</h4>
    <ul>
      <li v-for="(r, k) in result" :key="k">
        <table>
          <tr>
            <td>
              <span
                class="coord"
                :style="r.copy ? 'text-decoration: line-through;' : ''"
                >{{ r.coord }}</span
              >
            </td>
            <td>
              <span v-if="!r.copy">{{ r.tempo }}</span>
              <small v-else>
                <countdown :time="r.time * 1000" :transform="transform">
                  <template slot-scope="props">
                    {{ props.minutes }}:{{ props.seconds }}</template
                  >
                </countdown>
              </small>
            </td>
            <td>
              <button @click="getCopy(r)">Copy</button>
            </td>
          </tr>
        </table>

        <hr v-if="k % 3 === 2" />
      </li>
    </ul>
  </div>
</template>

<script>
import Countdown from '@chenfengyuan/vue-countdown'

export default {
  name: 'App',
  components: {
    Countdown
  },
  data() {
    return {
      text: '',
      result: '',
      results: []
    }
  },
  methods: {
    getCopy(r) {
      r.copy = !r.copy
      this.$copyText(r.coord).then(
        () => null,
        () => alert('Erro')
      )
    },
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        const digits = value < 10 ? `0${value}` : value
        props[key] = `${digits}`
      })

      return props
    },
    convert(num, text) {
      switch (text) {
        case 'seg':
          return num
        case 'sec':
          return num
        case 'min':
          return num * 60
        default:
          return num
      }
    },
    getEmpty() {
      this.text = ''
      this.result = []
    },
    async getList() {
      if (this.text) {
        const results = await this.text.matchAll(
          /(-?\d+.\d+,-?\d+.\d{6})(:blank:)?(.+?(\d+\w+)?(\d+)(\w+))?/g
        )
        this.result = Array.from(results).map(i => {
          return {
            coord: i[1],
            copy: false,
            tempo: i[5] ? `${i[5]}${i[6]}` : null,
            time: i[5] ? Number(this.convert(i[5], i[6])) : 0
          }
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 350px;
}
li {
  list-style: none;
  line-height: 30px;
}

.coord {
  width: 200px;
}

textarea {
  width: 100%;
  margin: 0 auto;
}

table {
  margin: 0 auto;
  width: 300px;
}

td {
  text-align: left;
}

td:nth-child(2) {
  width: 50px;
}

hr {
  border-bottom: 1px dashed #ccc;
  border-style: dashed;
  width: 300px;
}

button {
  font-size: 18px;
  padding: 5px;
  margin: 0 5px;
}
</style>
