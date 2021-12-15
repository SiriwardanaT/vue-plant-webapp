<template>
  <div class="cart_summerybox">
      <b-card-group deck>
        <b-card header="Checkout" header-tag="header">
          <h3>CheckOut</h3>
          <b-card-text>
               <b-container>
            <b-row > 
                <b-col sm="8">
                    <label for="">Enter Your Name</label>
                    <b-form-input  v-model="text" placeholder="Enter your name"></b-form-input>
                </b-col>
                <b-col sm="3">
                     <label for="">Enter Card CVV</label>
                    <b-form-input  v-model="text" placeholder="3 digit"></b-form-input>
                </b-col>
                 <b-col sm="8">
                      <label for="">Enter AccountNo</label>
                    <b-form-input  v-model="text" placeholder="1234 1234 1234 1234"></b-form-input>
                </b-col>
                 <b-col sm="8">
                      <label for="">Enter Your Name</label>
                    <b-form-input  v-model="text" placeholder="Enter your name"></b-form-input>
                </b-col>
                
            
                  
            </b-row>
             </b-container>
            <b-row>
            <b-button
              squared
              variant="outline-success"
              style="width:50%;margin-left:30px"
              @click="ProceedToPay"
              >Pay</b-button
            >
            </b-row>
            <b-row>
               <PaymentMethods />
            </b-row>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
import PaymentMethods from '../../components/PaymentIcon/IconRaw.vue'
export default {
    components:{
        PaymentMethods
    }
}
</script>

<style>

</style>