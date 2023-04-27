<template>
    <div class="Foot">
    <div class="Left">
      <div class="margin-top: 30px;">
        <p class="margin-bottom: 80px;"> <strong class="T1">Healthy</strong> is a registered charity in Australia, the United States and Uganda.
          In Australia, School for Life Foundation is endorsed as a Deductible Gift Recipient.
          Your donations of $2 and over are tax deductible. In the USA, School
          for Life is endorsed as a s501(c)(3). Please contact annabelle@schoolforlife.
          org.au for donation details.</p>
        <span style="font-size: 20px; margin-top: 90px;">Healthy - Copyright © 2022 - All rights reserved</span>
      </div>
    </div>
    <div class="Rihgt">
      <h3 class="T1">Contact Us</h3>
      <p>+962 797 123 456 <br>
        info@healthy.com</p>
        <div class="DivLogo">
          <div>
            <img src="@/assets/Images/insta.svg" alt="" width="50px" height="50px">
          </div>
          <div>
            <img src="@/assets/Images/facebok.svg" alt="" width="50px" height="50px">
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      count: 0
    }
  }
})
</script>

<style scoped>
.Foot{
    display: flex;
    color: gray;
    font-size: 25px;
}
.Left{
    background-color: #F2F2F2;
    flex: 2;
    border-right: rgb(0 0 0 / 13%) solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 70px;
    padding-bottom: 20px;
    line-height: 30px;
}
.Rihgt{
    background-color: #F2F2F2;
    flex: 1;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: auto;
}
.DivLogo{
    display: flex;
}
#Footer{
    margin: auto;
    margin-bottom: 0;
    width: 100%;
}
/* mobile screens */
@media (max-width:767px){
.Foot{
    flex-direction: column;
}
}
/* small screens */
@media (min-width:768px) and (max-width:991px) {
    #Footer{
        flex-direction: column;
    }
}
/* medium screens */
@media (min-width:992px) {
    #Footer{
        flex-direction: column;
    }
}
@media (max-width:500px) {
    .Foot{
        font-size: 16px;
    }
}
</style>
