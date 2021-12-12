<template>
  <div>
    <div class="cart_summerybox">
      <b-card-group deck>
        <b-card header="Checkout" header-tag="header">
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
            </b-row>
            <b-row>
              <b-button href="#" class="btn-check">Checkout</b-button>
            </b-row>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItem: "",
      selectedIndex: 0,
      delivery: 20,
    };
  },
  props: {
    total: {
      type: Number,
      default: null,
    },
  },
  methods: {},
};
</script>

<style>
.price {
  margin-left: 100px;
}
</style>
