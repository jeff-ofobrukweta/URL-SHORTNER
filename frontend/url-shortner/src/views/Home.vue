<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <button @mouseover="hover = true" class="headerbtn">History</button>
        <ul @mouseover="hover = true" @mouseleave="hover = false" v-if="hover" class="main_list">
          <li v-for="(value, index) in getAllUrl.records" :key="index" class="item">
            <div>{{value.shortUrl}}</div>
            <img class="bin" :src="require('@/icons/recycle-bin.svg')" alt="bin" />
          </li>
          <li class="item">
            <button class="btn-container-main">
              <button class="buttton">❮</button>
              <button class="buttton">❯</button>
            </button>
          </li>
        </ul>
      </div>
      <div class="primary">
        <input
          v-model="body.longUrl"
          class="urlInput"
          type="text"
          placeholder="Paste your link here..."
        />
        <button @click="creating" class="submit urlButton">
          <div>Submit</div>
          <img class="checklist" :src="require('@/icons/checklist.svg')" alt="bin" />
        </button>
        <div class="results_dialogue">
          <div class="main_dialogue">
            Brown acetate glasses from Moscot,This rounder,
            <div>nerdier number has served as the calling card for generations of creative, thoughtful,</div>
            <div>free-spirited intellectuals and renowned artists.</div>
          </div>
        </div>
        <div class="results hidden">
          <button class="copy urlButton">Copy</button>
        </div>
        <a href="#" class="clear hidden">Clear</a>
      </div>
      <div class="footer">
        <p>Made by @spokes</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      pageData: { page: 1 },
      body: {
        firstName: "Test Account",
        lastName: "testing",
        age: 0,
        longUrl: null
      },
      hover: false
    };
  },
  components: {},
  async mounted() {
    this.GET_URL_LIST_SUMMARY(this.pageData);
    this.mounting();
  },
  computed: {
    ...mapGetters(["getAllUrl", "getsingleUrl"])
  },
  methods: {
    ...mapActions(["GET_URL_LIST_SUMMARY", "POST_URL_SUMMARY"]),
    ...mapMutations(["SET_URL_SUMMARY"]),

    mounting() {
      return;
    },
    deleting() {
      return;
    },
    async creating() {
      await this.POST_URL_SUMMARY(this.body);
      return;
    },
    fetching() {
      return;
    }
  }
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

.bin {
  width: 20px;
  cursor: pointer;
}
.checklist {
  width: 20px;
  cursor: pointer;
}
.results_dialogue {
  position: absolute;
  width: 100%;
  font-size: 13px;
  text-align: center;
}
.main_dialogue {
  background: #ececec;
  padding: 10px;
}
.headerbtn {
  margin: 25px 10px;
  border: 0px;
  outline: none;
  padding: 8px 10px;
  border-radius: 18px;
  background-color: #0077cc;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
}

.main {
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-rows: 90px 1fr 50px;
  justify-items: stretch;
  justify-content: stretch;
  height: 100vh;
}

.header {
  position: relative;
  background-color: #222;
  color: white;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5fr 4fr;
  align-items: center;
}
.main_list {
  position: absolute;
  left: 6px;
  top: 50px;
  list-style: none;
  padding: 10px;
  width: 80%;
  text-align: left;
  box-shadow: 0 7px 64px rgba(31, 32, 65, 0.1);
  transition: all 0.3s ease;
  border-radius: 0.375rem;
  background: #fff;
  color: #000;
}

.btn-container-main {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 8px 0;
}

.buttton {
  color: black;
  float: left;
  padding: 8px 20px;
  text-decoration: none;
}
.item {
  margin: 5px 0px;
  display: flex;
  padding: 7px;
  justify-content: space-between;
}

.header h2 {
  justify-self: start;
  align-self: center;
  margin: 0 0 0 0;
  grid-area: 1/2/2/3;
}

.header p {
  padding-top: 3px;
  justify-self: start;
  align-self: start;
  grid-area: 2/2/3/3;
  margin: 0 0 10px 0;
}

.primary {
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  align-items: end;
  align-content: center;
}

.urlInput {
  grid-area: 1/2/2/3;
  height: 40px;
  padding: 0 10px 0 10px;
  border-radius: 4px 0 0 4px;
  font-size: 1.1em;
  border: 1px solid gray;
}

.urlButton {
  height: 42px;
  font-size: 1.1em;
  padding: 0 10px 0 10px;
  border-radius: 0px 4px 4px 0;
  border: 1px solid gray;
  grid-area: 1/3/2/4;
  cursor: pointer;
  max-width: 80px;

  border: none;
}

.submit {
  background-color: #ececec;
  color: #222222;
  outline: none;
  display: flex;
  max-width: 96px;
  align-items: center;
}
.submit:hover {
  background-color: transparent;
  border: 0.69px solid #0077cc;
  color: #0077cc;
}
.results {
  grid-area: 1/3/2/4;
}
.copy {
  background-color: #4caf50;
}

.clear {
  grid-area: 2/1/3/5;
  justify-self: center;
  align-self: start;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
  color: white;
}

.hidden {
  display: none;
  z-index: -1;
}

.footer {
  grid-rows: 3/4;
  background-color: #222;

  justify-content: center;

  display: grid;
  color: #ddd;
}
</style>
