<template>
    <div class="continar">
        <!--Nav Start-->
        <!--Nav End-->
        <!--Healthy Start-->
        <div class="Healthy">
          <div class="health">
            <span class="HHealthy">
              <h1 class="HHead">Healthy</h1>
            </span>
             <h1 style="color: black; font-weight: 500; font-size: 35px;">Better healthcare for those who need it.</h1>
            <br>
            <span style="color: gray; font-size: 25px;">By providing comprehensive care that reaches the
              <br>
              needs of underdeveloped communities through
              <br>
              people and technology.</span>
            <div><button class="StartBtn" type="submit">START</button></div>
          </div>
        </div>
        <!--Healthy End-->
        <!--DO Start-->
        <div class="Do">
          <div class="DoTitle">
            <span><h1>What do we do?</h1></span>
          </div>
          <div class="DoPics">
            <div class="DoPic1">
              <img src="@/assets/Images/service1-100.jpg" alt="" style="width: 100%; border-top-right-radius: 10px;
              border-top-left-radius: 10px;">
              <span><h1 style="font-style: normal ; font-weight: 900; font-size: 27px;">Mobile Medicine</h1></span>
              <div class="PPic">
                <span>Developing in-country relationships
                  and delivering care to rural
                  communities.</span>
              </div>
            </div>
            <div class="DoPic1">
              <img src="@/assets/Images/service2-100.jpg" alt="" style="width: 100%; border-top-right-radius: 10px;
              border-top-left-radius: 10px;">
              <span><h1 style="font-style: normal ; font-weight: 900; font-size: 27px;">Infrastructure Support</h1></span>
              <div class="PPic">
                <span>Building capacity with medical device donations and program development.</span>
              </div>
            </div>
            <div class="DoPic1">
              <img src="@/assets/Images/service3-100.jpg" alt="" style="width: 100%; border-top-right-radius: 10px;
              border-top-left-radius: 10px;">
              <span><h1 style="font-style: normal ; font-weight: 900; font-size: 27px;">Impact Investing</h1></span>
              <div class="PPic">
                <span>Investing in technology for more equitable future.</span>
              </div>
            </div>
          </div>
        </div>
        <!--DO End-->
        <hr class="HR">
        <!--NUM Start-->
        <div class="Num">
          <div class="Num1">
            <div><span style="color: #93B41B;font-size: 60px;font-weight: 700;">6852</span></div>
            <div style="font-size: 25px;  font-weight: 200; font-style: normal; color: #00000070;">Patients Treated</div>
          </div>
          <div class="Num1">
            <div><span style="color: #93B41B;font-size: 90px;font-weight: 700;">420</span></div>
            <div style="font-size: 25px;  font-weight: 200; font-style: normal; color: #00000070;">Surgeries</div>
          </div>
          <div class="Num1">
            <div><span style="color: #93B41B;font-size: 60px;font-weight: 700;">542000</span></div>
            <div style="font-size: 25px;  font-weight: 200; font-style: normal; color: #00000070;">$ Raised</div>
           </div>
        </div>
        <!--NUM End-->
        <!--Footer Start-->
        <!--Footer End-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // only for TS

export default defineComponent({
  name: 'HomeView',
  components: {}
})
</script>

<style scoped>
.Healthy{
    background-image: url(@/assets/Images/Cover.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.StartBtn{
    background-image: linear-gradient(to right,#D7DF22 , #8EC73E);
    width: 6.5em;
    height: 2.3em;
    border-radius: 9em;
    border: none;
    margin-left: 200px;
    margin-top: 70px;
    font-size: 35px;
    /* font-family: Monospace; */
    color: #0000009d;
    /* font-family: poppins, sans-serif; */
    font-weight: 300;
    font-style: normal;
    box-shadow: 2px 2px 20px -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.3em;
}
.health{
    margin-left: 100px;
}
.HHead{
    color: #93B41B;
    font-size: 75px;
}
.DoTitle{
    color: #93B41B;
    margin-bottom: 50px;
    font-family: poppins, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 22px
}
.Do{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
}
.DoPics{
    display: flex;
    justify-content: space-around;
    height: 450px;
    margin-right: 30px;
}
.DoPic1{
    box-shadow: 4px 4px 30px #09090954;
    width: 360px;
    height: auto;
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
}
.PPic{
    width: 285px;
    font-family: poppins, sans-serif;
    font-weight: 200;
    font-style: normal;
    color: #838383;
    font-size: 20px ;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: #838383;
    font-size: 17px;
    text-align: center;
    display: flex;
}
.Num{
    display: flex ;
    justify-content: center;
    margin-bottom: 120px;
    margin-top: 120px;
}
.Num1{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
}
</style>
