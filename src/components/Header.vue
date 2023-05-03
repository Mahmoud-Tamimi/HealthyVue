<template>
    <div class="Nav">
    <div class="Title">
      <div>
        <img src="@/assets/Images/Logo.svg" alt="Logo.pic" style="width: 40; height: 30px;">
      </div>
      <div style="margin-left: 10px; margin-right: 10px;">
        <span>Healthy</span>
      </div>
    </div>
    <div class="Info" id="Menu"  :class="{InfoResponsive: Menu}">
      <span class="Links">
        <router-link to="/">Home</router-link>
        <router-link to="/Services">Services</router-link>
        <router-link to="/About">About Us</router-link>
      </span>
    </div>
    <div class="Hold">
      <div class="TextSearch" id="Search">
        <div id="BoxSearch">
          <input type="text" onkeypress="" placeholder="Search..." id="SearchGreen" style="flex: 2;" onblur=""> <!-- KEyreader(event) --- closeMenu() -->
          <img src="@/assets/Images/icons8-search-32.png" alt="" style="width: 20px; opacity: 0.5;">
        </div>
      </div>
      <div class="Icons">
        <div>
          <img class="IconSaerch" src="@/assets/Images/search-square-svgrepo-com.svg" alt=""> <!-- onclick="menuSearch()"-->
         </div>
         <div>
           <img class="IconMenu" src="@/assets/Images/BurgerMenu.svg" alt="" @click="Menu=!Menu">  <!-- onclick="menubox()"-->
         </div>
      </div>
    </div>
    <div class="Lang">
      <button id="Btnav">English</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      count: 0,
      Menu: false
    }
  }
})
</script>

<style scoped>

.router-link-exact-active::after{
    width: 100% !important;
}
.router-link-exact-active{
    font-weight: 800 !important;
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
.InfoResponsive{
        right: 0!important;
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
body{
    font-family: poppins, sans-serif;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
}
* {
    box-sizing: border-box;
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
/* mobile screens */
@media (max-width:767px) {
h1{
    font-size: 25px;
}
#header{
    overflow-y: scroll;
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
</style>
