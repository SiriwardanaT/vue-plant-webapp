<template>
  <div
    style="position: absolute; top: 20%; margin-left: 20px; margin-right: 20px"
  >
    <h1>My Cart</h1>
    <b-row>
      <b-col>
        <CartTable :CartList="CartList" @updateQuntity="updateQuntity" />
      </b-col>
      <b-col>
        <CartSummery :total="Subamount" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CartSummery from "../productSummery.vue";
import CartTable from "../../components/Table/CartTable.vue";
import CartData from "../../data/Cart.json";
export default {
  data() {
    return {
      isshow: false,
      show: false,
      CartList: [],
      Subamount: 0,
    };
  },
  components: {
    CartSummery,
    CartTable,
  },
  methods: {
    showPaymentForm() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.isshow = true;
      }, 3000);
    },
    updateQuntity(value) {
      console.log("welcome");
      console.log(value);
      //update quntity

      //this.CartList = CartData.updatedCart;
      this.handleSubtotal();
    },

    handleCartList() {
      this.CartList = CartData.cart;
    },

    handleSubtotal() {
      this.Subamount = 0;
      let i = 0;
      for (i = 0; i < this.CartList.length; i++) {
        console.log("helooo" + this.CartList[i].Amount);
        this.Subamount += this.CartList[i].Amount * this.CartList[i].qun;
      }
    },
  },
  created() {
    this.handleCartList();
    this.handleSubtotal();
  },
};
</script>

<style>
.cartTable {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 4% !important;
}
.btn-check {
  background-color: rgba(77, 223, 77, 0) !important;
  color: rgb(3, 49, 17) !important;
  width: 400px;
}
.checkout {
  position: absolute;
  top: 20%;
  width: 50vh;
  height: 50vh;
  margin-left: 100%;
  margin-right: 0;
  padding: 0 0 0 12px;
}
.btn-check:hover {
  background-color: rgba(111, 236, 111, 0.986) !important;
  color: aliceblue !important;
  border: none;
}
</style>
