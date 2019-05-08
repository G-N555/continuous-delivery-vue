<template>
  <div id="app">
    <HelloWorld msg="Welcome to Truck stop Search!"/>
    <!--<img src="./assets/logo.png">-->
    <div>
      <Map></Map>
    </div>
    <h3>"filter location"</h3>
    <FilterForm msg="test"></FilterForm>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map";
import FilterForm from "./components/FilterForm";

export default {
  name: "app",
  components: {
    HelloWorld,
    FilterForm,
    Map,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
