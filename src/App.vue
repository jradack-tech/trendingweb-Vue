<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    navigation,
    Footer,
  },
};
</script>
