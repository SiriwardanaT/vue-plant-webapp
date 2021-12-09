<template>
    <div style="position:absolute;top:20%;margin-left:20px;margin-right:20px">
        <!-- cart -->
        <h1>My Cart</h1>

          <b-table
             class="cartTable"
            :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :no-border-collapse="noCollapse"
            :items="items"
            :fields="fields"
            :head-variant="headVariant"
            :table-variant="tableVariant"
        ></b-table>
       <b-overlay 
            :show="show" rounded="sm"
            spinner-variant="success"
            spinner-type="grow"
            spinner-small
            style="max-width:400px;"   
        >
                <div class="btn-content">
                    <b-button href="#" @click="showPaymentForm"  class="btn-check">Proceed To Check out</b-button>
                </div>
       </b-overlay>


        <!-- after proceed the cart display billing info -->
        <div class="checkout" v-if="isshow">
            <h1>checkout</h1>
        </div>


    </div>
</template>

<script>
export default {
  data(){
      return{
        fields: ['PRODUCT', 'PRICE', 'QUN','TOTAL'],
        items: [
          { PRODUCT: 40, PRICE: 'Dickerson', QUN: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ],
        striped: true,
        bordered: false,
        borderless: true,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: true,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false,
        isshow :false,
        show:false
      }
  },
  methods:{
      showPaymentForm(){
          this.show = true
         
          setTimeout(()=>{
              this.show = false
              this.isshow = true
          },3000)
      }
  }
}
</script>

<style>
.cartTable{
   width:100% !important;
   margin-left:0 !important;
   margin-right:12% !important;
}
.btn-check{
    background-color:rgba(48, 207, 48, 0) !important;
    color:rgb(3, 49, 17) !important;
    border-color: 1px solid black !important;
    width:400px;
    
}

</style>