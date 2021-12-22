<template>
  <div class="tableContent">
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">product Name</th>
          <th scope="col">Quntity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in CartList" :key="index">
          <th scope="row">{{ item.name }}</th>
          <td>
            <b-button
              squared
              variant="outline-success"
              @click="updateQuntity('+', item)"
              >+</b-button
            >
            {{ item.qun }}
            <b-button
              squared
              variant="outline-success"
              :disabled="item.qun === 1 ? true  :false"
              @click="updateQuntity('-', item)"
              >-</b-button
            >
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.price * item.qun }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qun: 0,
    };
  },
  props: {
    CartList: {
      type: Array,
    },
  },
  methods: {
    //increase and decrease quantity
    updateQuntity(mode, value) {
      if (mode === "+") {
        value.qun++;
      } else {
        if (value.qun != 1) {
          value.qun--;
        } else {
          // this.disabled = true;
          console.log("")
        }
      }
      this.$emit("updateQuntity", value);
    },
    

  },

};
</script>

<style>
.tableContent {
  position: relative;
  width: 100vh;
  
}
</style>
