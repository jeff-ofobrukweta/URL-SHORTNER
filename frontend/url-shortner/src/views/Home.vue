<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <button @click="hover = !hover" class="headerbtn">History</button>
        <ul v-if="hover" class="main_list">
          <ul class="inner-list" v-if="!getloading">
            <li v-for="(value, index) in getAllUrl.records" :key="index" class="item">
              <div class="truncate-word">{{value.shortUrl}}</div>
              <div class="list-err-msg">unable to connect to server</div>
              <img class="bin-loader" :src="require('@/assets/loading.svg')" alt="loading" />
              <img class="bin" :src="require('@/icons/recycle-bin.svg')" alt="bin" />
            </li>
          </ul>
          <li class="item">
            <button class="btn-container-main">
              <button
                @click="()=>pagination(pageData.prev)"
                :disabled="getloading || (this.pageData.page == 1)"
                :class="[isactivePrev ? 'disableClass' : '', 'buttton']"
              >❮</button>
              <button
                @click="()=>pagination(pageData.next)"
                :disabled="getloading || (this.pageData.page == this.getAllUrl.pages)"
                :class="[isactiveNext ? 'disableClass' : '', 'buttton']"
              >❯</button>
            </button>
          </li>
          <ul v-if="getloading">
            <li>
              <img class="loader" :src="require('@/assets/loading.svg')" alt="loading" />
            </li>
          </ul>
        </ul>
      </div>
      <div class="primary">
        <input
          v-model="body.longUrl"
          class="urlInput"
          type="text"
          placeholder="Paste your link here..."
        />
        <button :disabled="checkInput" @click="creating" :class="[checkInput ? 'disableClass' : '', 'submit urlButton']">
          <div>Submit</div>
          <img v-if="!showChecklist" class="checklist" :src="require('@/icons/checklist.svg')" alt="check" />
        </button>
        <div class="results_dialogue">
          <div class="main_dialogue">
            <div v-if="getsingleUrl">{{getsingleUrl.appendedmessage.message}}</div>
            <div v-else></div>
          </div>
        </div>
        <div class="results hidden">
          <button class="copy urlButton">Copy</button>
        </div>
        <img
          v-if="getcreateloading"
          style="width: 50px;"
          class="clear"
          :src="require('@/assets/loading.svg')"
          alt="loading"
        />
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
      pageData: { page: 1, prev: "<", next: ">" },
      body: {
        firstName: "Test Account",
        lastName: "testing",
        age: 0,
        longUrl: null,
      },
      hover: false,
    };
  },
  components: {},
  async mounted() {
    this.pagination();
  },
  computed: {
    ...mapGetters(["getAllUrl", "getsingleUrl", "getloading","getcreateloading"]),
    checkInput() {
      // check if it empty and if its a valid url
      const result =
        !this.body.longUrl ||
        this.body.longUrl == null ||
        this.body.longUrl == "";
      return result;
    },
    isactiveNext() {
      const condition =
        this.getloading || this.pageData.page == this.getAllUrl.pages;
      return condition;
    },
    isactivePrev() {
      const condition = this.getloading || this.pageData.page == 1;
      return condition;
    },
    showChecklist(){
     const result =  !(this.getsingleUrl.appendedmessage.internalcode) || this.checkInput
     return result
    }
  },
  methods: {
    ...mapActions(["GET_URL_LIST_SUMMARY", "POST_URL_SUMMARY"]),
    ...mapMutations(["SET_URL_SUMMARY", "SET_LOADER","SET_CREATE_LOADER"]),

    deleting() {
      return;
    },
    async pagination(value) {
      try {
        if (this.pageData.page <= this.getAllUrl.pages) {
          if (value == ">" && this.pageData.page < this.getAllUrl.pages) {
            this.SET_LOADER(true);
            this.pageData.page = this.pageData.page + 1; // or this.pageData.page ++
            await this.GET_URL_LIST_SUMMARY(this.pageData);
            this.SET_LOADER(false);
            return;
          }
          if (value == "<" && this.pageData.page > 1) {
            this.SET_LOADER(true);
            this.pageData.page = this.pageData.page - 1; // or this.pageData.page--
            await this.GET_URL_LIST_SUMMARY(this.pageData);
            this.SET_LOADER(false);
            return;
          }
        } else {
          this.SET_LOADER(true);
          await this.GET_URL_LIST_SUMMARY(this.pageData);
          this.SET_LOADER(false);
          return;
        }
        return;
      } catch (err) {
        throw new Error(err);
      }
    },
    async creating() {
      this.SET_CREATE_LOADER(true);
      await this.POST_URL_SUMMARY(this.body)
        .then(() => {
          this.SET_CREATE_LOADER(false);
          this.body.longUrl = this.getsingleUrl.result.shortUrl;
          return;
        })
        .catch((err) => {
          this.SET_CREATE_LOADER(false);
          throw new Error(err);
        });
    },
    fetching() {
      return;
    },
  },
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
.list-err-msg{
  width: 11rem;
    font-size: 11px;
    color: red;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.bin {
  width: 16px;
  cursor: pointer;
}
.loader {
  width: 3rem;
  margin: 0px 50%;
}
.bin-loader {
  width: 30px;
}
.truncate-word {
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.checklist {
  width: 20px;
  cursor: pointer;
}
.inner-list {
  margin-left: -40px;
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
  z-index: 2000;
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

.disableClass {
  cursor: not-allowed;
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
