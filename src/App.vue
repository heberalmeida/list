<template>
  <div id="app">
    <div id="slide-externo">
      <div id="slide-interno">
        <h3>Só Coordenadas</h3>
        <h3>Solo coordenadas</h3>
        <h3>Only Coordinate</h3>
      </div>
    </div>
    <textarea v-model="text" cols="30" rows="5" />
    <br />
    <div style="display: flex">
      <vue-flip active-click width="200px" height="50px" class="btn-container">
        <template v-slot:front>
          <div class="btn" @click="getList">Converter</div>
        </template>
        <template v-slot:back>
          <div class="btn" @click="getEmpty">Limpar</div>
        </template>
      </vue-flip>
      <div class="flipper btn-container" v-if="result.length">
        <a class="btn btn-down" href="#" @click.prevent="createAndOpenFile"
          >Download GPX</a
        >
      </div>
    </div>
    <!--  <button @click.prevent="getList">Converter</button>
    <button @click.prevent="getEmpty">Limpar</button> -->
    <ul>
      <li v-for="(r, k) in result" :key="k">
        <table>
          <tr>
            <td class="coord">
              <span
                class="coord"
                :style="r.copy ? 'text-decoration: line-through;' : ''"
                >{{ r.coord }}</span
              >
            </td>
            <td class="tempo">
              <span v-if="!r.copy">{{ r.tempo }}</span>
              <span class="text-tempo" v-else>
                <countdown :time="r.time * 1000" :transform="transform">
                  <template slot-scope="props">
                    {{ props.minutes }}:{{ props.seconds }}</template
                  >
                </countdown>
              </span>
            </td>
            <td class="copy">
              <vue-flip
                active-click
                width="100px"
                height="30px"
                class="btn-content"
              >
                <template v-slot:front>
                  <div class="btn" @click="getCopy(r)">Copy</div>
                </template>
                <template v-slot:back>
                  <div class="btn" @click="getCopy(r)">=)</div>
                </template>
              </vue-flip>
            </td>
          </tr>
        </table>

        <hr v-if="k % 3 === 2" />
      </li>
    </ul>
  </div>
</template>

<script>
import VueFlip from 'vue-flip'
import Countdown from '@chenfengyuan/vue-countdown'

export default {
  name: 'App',
  components: {
    Countdown,
    VueFlip
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
    createAndOpenFile() {
      let stupidExample = `<?xml version="1.0" encoding="UTF-8"?>
            <gpx version="1.1" creator="Só Coordenadas | Solo coordenadas | Only Coordinate | https://heberalmeida.github.io/list/">
              ${this.result
                .map(i => {
                  let coord = i.coord.trim().split(',')
                  return `<wpt lat="${coord[0]}" lon="${coord[1]}"></wpt>`
                })
                .join('')}</gpx>`
      var a = window.document.createElement('a')
      a.href = window.URL.createObjectURL(
        new Blob([stupidExample], { type: 'text/xml' })
      )
      a.download = `gpx${Math.floor(Date.now() / 1000)}.gpx`

      document.body.appendChild(a)
      a.click()

      document.body.removeChild(a)
    },
    async getList() {
      if (this.text) {
        const results = await this.text.matchAll(
          /(-?\d+.\d+, ?-?\d+.\d{6})(:blank:)?(.+?(\d+\w+)?(\d+)(\w+))?/g
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
  margin: 20px auto;
  width: 350px;
}
ul {
  margin: 0;
  padding: 0;
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
  margin: 10px auto;
  border: 2px solid #673bb7;
  padding: 10px;
  box-sizing: border-box;
}

table {
  margin: 0 auto;
  width: 100%;
}

td {
  text-align: left;
}

td:nth-child(2) {
  width: 70px;
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

.back {
  background-color: #ffc107;
}
.front {
  background-color: #673ab7;
}
.back,
.front {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 100%;
}
.back {
  transform: rotateY(180deg);
}
.back,
.front {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.back,
.flipper,
.front {
  transform-style: preserve-3d;
}
.btn-content {
  margin: 0 auto;
}
.btn-container {
  margin: 0 auto 15px auto;
}
.btn {
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

@keyframes slide {
  0%,
  30% {
    transform: translateY(0);
  }
  33%,
  60% {
    transform: translateY(-100px);
  }
  66%,
  93% {
    transform: translateY(-200px);
  }
}
#slide-externo {
  width: 100%;
  height: 70px;
  overflow: hidden;
  box-sizing: border-box;
}

#slide-interno {
  width: 100%;
  animation: slide 10s infinite;
}
#slide-interno h3 {
  display: block;
  height: 70px;
  width: 100%;
  color: #673bb7;
  font-size: 28px;
}
.text-tempo {
  background-color: #673bb7;
  color: #fff;
  font-size: 14px;
  padding: 4px;
}

.btn-down {
  background: #673bb7;
  color: #fff;
  text-decoration: none;
  width: 200px;
  height: 50px;
  flex: 1;
  margin-left: 4px;
}

.btn-container {
  flex: 1;
}
</style>
