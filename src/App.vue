<template>
  <Header/>
  <Home/>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue"

export default {
  name: "App",
  components: {
    Header,
    Home
  },
};
</script>

<style lang="scss">
body{
  margin:0;
  padding:0;
  font-family: 'Kumbh Sans', sans-serif;
}
</style>
