<template>
  <Header></Header>
  <Simple></Simple>
  <router-view/>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Simple from './components/Simple.vue'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {}
  },
  components: { Header, Footer, Simple }
})
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.Foot{
  margin-top: auto;
  margin-bottom: 0;
}
.Title {
    display: flex;
    color: #93B441;
    margin-left: 50px;
    font-family: poppins;
    font-weight: 700;
    font-style: normal;
    font-size: 25px;
    height: 100%;
    align-items: center;
}
.Nav{
    display: flex;
    align-items: center;
    height: 60px;
    box-shadow: 0 0 10px -5px #888;
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 100;
}
.Info{
    height: 100%;
    margin: auto;
}
.TextSearch{
    position: absolute;
    height: 90px;
    width: 375px;
    background-image: linear-gradient(to right, #D8E022 , #8EC73E);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: -30px;
    color: #00000023;
    top: 0;
}
.Links{
    gap: 30px;
}
#BoxSearch:focus-within{
    background: rgba(255, 255, 255, 0.731) !important;
}
::placeholder{
    color: rgba(0, 0, 0, 0.212);
    font-family: poppins;
    font-size: 18px;
    font-weight: 200;
}
#BoxSearch{
    border-radius: 25px;
    width: 340px;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.559);
    border: none;
    box-shadow: 0 0 20px -6px #0505057a;
    outline: none;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#Text{
    border: none;
    outline: none;
    background: none;
}
#SearchGreen{
    border: none;
    outline: none;
    background: none;
}
.Icons{
    display: flex;
    gap: 5px;
}
.IconSaerch{
    display: none;
    width: 30px;
    height: 30px;
}
.IconMenu{
    display: none;
    width: 30px;
    height: 30px;
}
#Btnav{
    background: #F2F2F2;
    box-shadow: 2px 2px 8px 6px #07070721;
    border: none;
    width: 80px;
    height: 25px;
    border-radius: 5px;
    color: gray;
    margin-right: 20px;
}
.Info span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.Info span > a {
    position: relative;
    font-family: poppins, sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#282828;
    text-decoration: none;
    display: block;
    width: 90px;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Info span  > a::after {
    content: "";
    display: block;
    background-color:#93B41B;
    width: 0;
    height: 7px;
    transition: width 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
}
.Info span > a:hover:after {
    width: 100%;
}
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
.T1{
    color: #000000a1;
    font-weight: 800;
    font-size: 25px;
}
body{
    font-family: poppins, sans-serif;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
}
* {
    box-sizing: border-box;
}
.continar{
    width: 100%;
}

.continar{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
#Footer{
    margin: auto;
    margin-bottom: 0;
    width: 100%;
}
.Hold{
    width: 375px;
    margin-right: 30px;
    position: relative;
}
.HR{
    width: 80%;
    margin-top: 100px;
    color: rgba(0, 0, 0, 0);
    opacity: 0.3;
}

/* mobile screens */
@media (max-width:767px) {
    .Num {
        display: flex;
        justify-content: center;
        margin-bottom: 120px;
        margin-top: 120px;
        flex-direction: column;
        align-items: center;
        gap: 100px;
}
.Foot{
    flex-direction: column;
}
.StartBtn{
    font-size: 20px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0;
}
.health{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 50px;
}
h1{
    font-size: 25px;
}
.HHead{
    font-size: 40px;
}
.Healthy{
    height: auto;
}
.Num1 {
    width: 100%;
}
.HHealthy{
    font-size: 50px;
}
#header{
    overflow-y: scroll;
}
.Our{
    padding: 0px 50px;
}
.IMG{
    aspect-ratio: 3/2;
  }
  .Our{
    padding: 0 30px;
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
    .StartBtn{
      margin-right: 20px;
   }
}
@media (max-width:992px) {
    .IMG{
        border-radius: 0;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
       }
       .LPicP{
        width: 90%;
        margin: auto;
       }
}
/* custom DO */
@media (max-width:1400px) {
    .DoPics{
        display: flex;
        flex-direction: column;
        gap: 50px;
        height: auto;
        border-radius: 10px;
    }
    .Do{
        margin: 350px 0;
    }
    .DoPics{
        height: auto;
    }
}
@media (max-width:1200px) {
    .AllPro{
        flex-direction: column;
        gap: 50px;
    }
}
@media (max-width:992px) {
    .PicP{
        flex-direction: column;
        gap: 0px;
    }
}
@media (max-width:1150px) {
    .TextSearch{
        position: fixed;
        right: 10%;
        top:-100%;
        transition: top ease 0.5s;
        top: -100%;
        right: 5%;
        max-width: 90%;
    }
    .IconSaerch{
        display: block;
    }
    .Hold{
        display: flex;
        margin-right: 0;
        width: auto;
    }
  .MobileMenu{
    top: 90px;
  }
}
@media (max-width:750px) {
    .Lang{
        display: none;
    }
    .Info{
        position: absolute;
        width: 300px;
        max-width: 100vw;
        background: white;
        filter: drop-shadow(2px 4px 6px black);
        height: 100vh;
        top: 0;
        right: -100%;
        transition: right 0.6s ease;
    }
    .IconSaerch{
        margin: 0;
    }
    .IconMenu{
        display: block;
    }
    .Icons{
        margin: auto;
        margin-right: 0px;
        gap: 20px;

    }
    .Hold{
        width: 500px;
        margin-right: 40px;
    }
    .Info span{
        flex-direction: column;
        top: 60px;
        position: relative;
        justify-content: flex-start;
    }
    .Info span > a{
        height: 60px;
        width: 60%;
    }
}
@media (max-width:500px) {
    .Foot{
        font-size: 16px;
    }
}
</style>
