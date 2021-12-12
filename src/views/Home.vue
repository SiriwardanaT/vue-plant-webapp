<template>
  <div class="home" style="position: absolute; top: 20%">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ListComponent/productList.vue";
export default {
  components: {
    ProductList,
  },

  data() {
    return {};
  },

  methods: {},
  watch: {
    $route() {
      alert("hello");
    },
  },
};
</script>

<style>
#section {
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
#section2 {
  display: flex;
  height: 100vh;
}
</style>
