<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="main">
      <div class="header"></div>
      <div class="primary">
        <input class="urlInput" type="text" placeholder="Paste your link here..." />
        <button class="submit urlButton">Submit</button>
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
import axiosInstance from "../utility/api.utility";

export default {
  name: "Home",
  data() {
    return {
      pageData: { page: 1 }
    };
  },
  components: {},
  async mounted() {
    this.GET_URL_LIST_SUMMARY(this.pageData)
  },
  computed: {
    ...mapGetters(["getAllUrl"])
  },
  methods: {
    ...mapActions(["GET_URL_LIST_SUMMARY"]),
    ...mapMutations(["SET_URL_SUMMARY"])
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

.main {
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-rows: 90px 1fr 50px;
  justify-items: stretch;
  justify-content: stretch;
  height: 100vh;
}

.header {
  background-color: #222;
  color: white;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5fr 4fr;
  align-items: center;
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
  background-color: #465f5f;
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
  background-color: #0077cc;
  color: #fff;
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
