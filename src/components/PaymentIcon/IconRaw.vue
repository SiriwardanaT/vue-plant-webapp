<template>
  <div class="container">
    <img :src="visaUrl" alt="" />
    <img :src="masterUrl" alt="" />
    <p>Available Payment Options</p>
  </div>
</template>

<script>
import VisaCard from "../../assets/visa.png";
import MasterCard from "../../assets/mastercard.png";
export default {
  data() {
    return {
      visaUrl: VisaCard,
      masterUrl: MasterCard,
    };
  },
};
</script>

<style>
.container{
    margin-top: 12px;
    padding:12px;
}
</style>
