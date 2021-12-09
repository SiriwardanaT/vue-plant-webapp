<template>
    <div>
        <h1>product summery</h1>
          
        <div v-for="(list,index) in itemsList" :key="index" @click="ShowItemClickEvent(list,index)" :style="selectedIndex === index ? 'background-color:gray':'color:blue'">
          <p>Name {{list.name}}</p>
          <p>Price {{list.price}}</p>
      </div>
    </div>



</template>

<script>
export default {
   data(){
       
       return{
           listItem :"",
           selectedIndex :0
       }
   },
   props:{
       itemsList:{
           type:Array,
           default:null
       }
       
   },
   methods:{
       ShowItemClickEvent(list,index){
           this.selectedIndex = index
           
           this.$emit("selectedprice",list.price)
       }
   },
   name:"summery",
//    watch:{
//            itemsList: {
//             handler(val) {
//                 if (val) {
//                     return val;
//                 }
//             },
//             immediate: true,
//             deep: true
//         },
//    }
}
</script>

<style>

</style>