<template>

    <div class="flex-content">
        <div  class="box">
           <div>
               <b-overlay :show="show" rounded="sm"
                    spinner-variant="success"
                    spinner-type="grow"
                    spinner-small
                    style="max-width: 320px;"
               
               >
                <b-card
                    title="Plant CV"
                    :img-src="imgUrl"
                    img-alt="Image"
                    img-top
                    img-height="300rem"
                    tag="article"
                    style="max-width:20rem"
                    class="mb-2"
                >
                    <b-card-text>
                     $400
                    </b-card-text>
                     <b-button  @click="cartBtnhandle('hello')"  class="btn-cart">Add To Cart</b-button>
                    
                </b-card>
                 </b-overlay>
            </div>
        </div>
        <div  class="box">
           <div>
                <b-card
                    title="Card Title"
                    :img-src="imgUrl2"
                    img-alt="Image"
                    img-height="300rem"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    $200
                    </b-card-text>

                     <b-button href="#" @click="cartBtnhandle(200)"  class="btn-cart">Add To Cart</b-button>
                </b-card>
            </div>
        </div>
          <div  class="box">
           <div>
                <b-card
                    title="Card Title"
                    :img-src="imgUrl2"
                    img-alt="Image"
                    img-height="300rem"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    $200
                    </b-card-text>

                     <b-button href="#" @click="cartBtnhandle"  class="btn-cart">Add To Cart</b-button>
                </b-card>
            </div>
        </div>
          <div  class="box">
           <div>
                <b-card
                    title="Card Title"
                    :img-src="imgUrl2"
                    img-alt="Image"
                    img-height="300rem"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    $200
                    </b-card-text>

                     <b-button href="#" @click="cartBtnhandle"  class="btn-cart">Add To Cart</b-button>
                </b-card>
            </div>
        </div>
          <div  class="box">
           <div>
                <b-card
                    title="Card Title"
                    :img-src="imgUrl2"
                    img-alt="Image"
                    img-height="300rem"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    $200
                    </b-card-text>

                     <b-button href="#" @click="cartBtnhandle"  class="btn-cart">Add To Cart</b-button>
                </b-card>
            </div>
        </div>
          <div  class="box">
           <div>
                <b-card
                    title="Card Title"
                    :img-src="imgUrl2"
                    img-alt="Image"
                    img-height="300rem"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    $200
                    </b-card-text>

                     <b-button href="#" @click="cartBtnhandle"  class="btn-cart">Add To Cart</b-button>
                </b-card>
            </div>
        </div>
       
    </div>
   
</template>

<script>
import imgurls from '../../assets/img2.jpg'
import imgurls2 from '../../assets/img3.jpg'
export default {
   data(){
       return{
           IsdisplayAddTocart :true,
           show: false,
           imgUrl:imgurls,
           imgUrl2:imgurls2
       }
   },
   methods:{
       cartBtnhandle(value){
           this.show = true
           
           
           
       }
   }
}
</script>

<style>
.flex-content{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    z-index: 100;
}
.flex-content .box{
    flex: 0 0 25%;
    justify-content:space-between;
    width:500px;
    margin-left:40px;
}
.btn-cart{
    background-color:rgba(48, 207, 48, 0) !important;
    color:rgb(3, 49, 17) !important;
    border-color: 1px solid black !important;
    width:100%;
    
}
.btn-cart:hover{
    background-color:rgba(108, 212, 108, 0.986) !important;
    color:rgb(251, 255, 253) !important;
    border:none;
    width:100%;
    
}
</style>