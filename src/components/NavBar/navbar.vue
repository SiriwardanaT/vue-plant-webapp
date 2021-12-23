<template>
  <div class="nav-content">
    <b-navbar class="navbase" style="height: 100px; background-color: white">
      <b-navbar-brand
        ><img :src="BaseImgurl" alt="" height="80px" /><span class="baseName"
          >PlantLife</span
        ></b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <span style="padding-right: 20px"
            ><img :src="CartImgurl" height="40px" alt="" /><b-badge
              variant="success"
              >{{ $store.state.quntity }}</b-badge
            ></span
          >
          <span style="padding-right: 20px"
            ><img :src="ProfileImgurl" height="40px" alt=""
          /></span>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Siriwardana H.D.T.H</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            <b-dropdown-item href="#">Setting</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import svgBaseImage from "../../assets/img1.svg";
import CartImage from "../../assets/cart.svg";
import profileImage from "../../assets/profile.svg";
export default {
  data() {
    return {
      BaseImgurl: svgBaseImage,
      CartImgurl: CartImage,
      ProfileImgurl: profileImage,
    };
  },
  created() {
    this.$store.dispatch("UPDATE_CART");
  },
};
</script>

<style>
.nav-content {
  position: fixed;
  width: 100%;
  z-index: 1000000;
}
.baseName {
  color: rgb(12, 136, 26);
  font-size: 40px;
}
.navbase {
  background-color: rgb(253, 253, 253) !important;
  border-bottom: rgb(221, 224, 221) 1px solid;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
/* .searchBar{
  
} */
</style>
