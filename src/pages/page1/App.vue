<template>
  <img alt="Vue logo" src="src/assets/img/logo.png" @click="jump" />
  <HelloWorld msg="小程序page1" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "../../components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  created(): void {
    console.log("gaga");
  }

  jump(): void {
    const route = {
      url: "page2"
    };
    // console.log(process.env.NODE_ENV)
    // console.log(process.env.VUE_APP_MP)
    // console.log(VUE_APP_MP)
    if (VUE_APP_MP === "miniprogram") {
      console.log(window.location.href);
      console.log(route.url);
      window.location.href = `${route.url}`;
      console.log(window.location.href);
    } else {
      window.location.href = `.${route.url}.html`;
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
  margin-top: 60px;
}
</style>
