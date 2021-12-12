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
        <tr v-for="item in CartList" :key="item.index">
          <th scope="row">{{ item.Product }}</th>
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
              :disabled="disabled"
              @click="updateQuntity('-', item)"
              >-</b-button
            >
          </td>
          <td>{{ item.Amount }}</td>
          <td>{{ item.Amount * item.qun }}</td>
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
      disabled: false,
    };
  },
  props: {
    CartList: {
      type: Array,
    },
  },
  methods: {
    updateQuntity(mode, value) {
      if (mode === "+") {
        value.qun++;
        this.disabled = false;
      } else {
        if (value.qun != 0) {
          value.qun--;
        } else {
          this.disabled = true;
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
