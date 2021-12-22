<template>
  <div>
    <div class="cart_summerybox">
      <b-card-group deck>
        <b-card header="Order Summery" header-tag="header">
          <b-card-text>
            <b-row> 
              <b-col><h6>Total</h6></b-col>
              <b-col
                ><h6>${{ total }}</h6></b-col
              >
            </b-row>
            <b-row>
              <b-col><h6>Delivery</h6></b-col>
              <b-col
                ><h6>${{ delivery }}</h6></b-col
              >
            </b-row>
            <hr />
            <b-row>
              <b-col><h6>SubTotal</h6></b-col>
              <b-col
                ><h6>{{ total + delivery }}</h6></b-col
              >
            </b-row>
            <b-row>
              <b-col><p>(1 Item)</p></b-col>
              <b-col><p>(1 Item)</p></b-col>
            </b-row>
            <b-row>
               <b-col>
                 <b-button
              squared
              variant="outline-success"
              @click="ProceedToPay"
              >Proceed To Payment ${{total + delivery}}</b-button
            >
               </b-col>
              <b-col>
                <!-- shipping address -->
                <Shippinginformation />
              </b-col>
            
            </b-row>
            <b-row>
               <PaymentMethods />
            </b-row>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import PaymentMethods from '../components/PaymentIcon/IconRaw.vue'
import Shippinginformation from '../views/User/ShippingInfo.vue'
export default {
  data() {
    return {
      listItem: "",
      selectedIndex: 0,
      delivery: 20,
    };
  },
  components:{
    PaymentMethods,
    Shippinginformation
  },
  props: {
    total: {
      type: Number,
      default: null,
    },
  },
  methods: {
    ProceedToPay(){
       const subtot = this.total + this.delivery
       this.$emit("proceedToPay",true,subtot)
    }
  },
};
</script>

<style>
.price {
  margin-left: 100px;
}
</style>
