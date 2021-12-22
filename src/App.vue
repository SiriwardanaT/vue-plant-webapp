<template>
  <div id="app">

    <NavBarSection/>
    
    <router-view/>
  </div>
</template>

<script>
import NavBarSection from '../src/components/NavBar/navbar.vue'
import CategorySider from '../src/components/ListComponent/categoryList.vue'
export default {
  components:{
    NavBarSection,
    CategorySider
  },
  created(){
      
  }
   
 
}
</script>

<style>

</style>
