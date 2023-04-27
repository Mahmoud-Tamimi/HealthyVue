<template>
     <div class="continar">
      <!--Nav Start-->
      <!--Nav End-->
      <!--AboutUs Start-->
      <div class="Us">
        <div class="AboutUs">
            <div><img src="@/assets/Images/Aboutus.png" alt="Logo" width="450px"></div>
            <div style="color: #000000ab; font-weight: 300; font-size: 20px;"><h1>Our History</h1></div>
            <div style="font-size: 25px; width: 100%; justify-content: center; display: flex; font-weight: 300; line-height: 30px;">
                <p>Our story goes back about 25+ years, to when our founder, Andy Standish, was working
                in the United States as a Certified Child Life Specialist (CCLS). Though her work
                kept her busy, she often made an effort to volunteer overseas in hospitals and clinics
                in low and middle income countries when she could. She would find ways to create
                play opportunities for children in low resource hospitals, she would help children and
                families understand an upcoming procedure, she would provide emotional and procedure
                support to cultivate positive coping techniques, she would teach healthcare
                providers how to engage patients in a child-friendly way, and so much more.</p>
            </div>
          </div>
      </div>
      <!--AboutUs End-->
      <hr class="HR">
       <!--OurTeam Start-->
       <div class="OurTeam">
        <div class="TeamTitle"><h1>Our Team</h1></div>
        <div class="AllPro">
            <div class="pro">
                <div class="PIC"></div>
                <div class="Name"><h4>David Mucasa</h4></div>
                <span class="m5">ACTING CEO</span>

            </div>
            <div class="pro">
                <div class="PIC2"></div>
                <div class="Name"><h4>Lisa Brown</h4></div>
                <span class="m5">HEAD OF FUNDRAISING AND IMPACT</span>

            </div>
            <div class="pro">
                <div class="PIC3"></div>
                <span class="Name"></span>
                <div class="Name"><h4>ISHIKA BURCHER</h4></div>
                <span class="m5">FINANCE MANAGER</span>
            </div>
        </div>
       </div>
       <!--OurTeam End-->
        <!--Footer Start-->
        <!--Footer End-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // only for TS

export default defineComponent({
  name: 'AboutView',
  components: {}
})
</script>

<style scoped>
.AboutUs{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 90%;
    font-size: 20px;
    color: gray;
}
.Us{
    display: flex;
    justify-content: center;
    margin: 100px 0;
}
.TeamTitle{
    text-align: center;
    margin: 100px 0;
    color: #000000ab;
    font-weight: 300;
    font-size: 20px;
}
.AllPro{
    display: flex;
    justify-content: space-around;
}
.pro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.m5{
    color: gray;
    font-size: 17px;
    font-weight: 300;
    margin-top: -20px;
}
.PIC{
    width: 275px;
    height: 275px;
    border: 7px solid;
    border-color: white;
    border-radius: 150px;
    box-shadow: 0 0 30px -5px #888;
    background-image: url('@/assets/Images/profile1.png');
}
.PIC2{
    width: 275px;
    height: 275px;
    border: 7px solid;
    border-color: white;
    border-radius: 150px;
    box-shadow: 0 0 30px -5px #888;
    background-image: url('@/assets/Images/profile2.png');
}
.PIC3{
    width: 275px;
    height: 275px;
    border: 7px solid;
    border-color: white;
    border-radius: 150px;
    box-shadow: 0 0 30px -5px #888;
    background-image: url('@/assets/Images/profile3.png');
}
.OurTeam{
    margin-bottom: 50px;
}
.Name{
    color: #000000ab;
    font-weight: 300;
    font-size: 25px;
}
</style>
