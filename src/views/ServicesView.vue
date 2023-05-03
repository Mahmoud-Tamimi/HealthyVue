<template>
<div class="continar">
    <!--Nav Start-->
    <!--Nav End-->
    <!--OurServices Start-->
    <div class="OurServices">
      <div class="Our">
        <h1 style="color: #000000ab; font-weight: 800; font-size: 30px;">Our Services</h1>
        <p>Our programs support children and their families during difficult healthcare experiences in a way that
          promotes hope, healing and happiness… something we believe every child deserves!</p>
        <br>
        <p>We help build healthy communities by ensuring healthcare professionals and organizations have the
          tools, strategies and training they need to minimize healthcare-related pain and suffering in children
          through the use of evidence-based child- and family-centered care practices.</p>
      </div>
      <hr class="HR">
      <div class="TitleAllServices">All Services</div>
      <div class="Filter_cont">
        <div class="Filter">
          <div class="filters">
            <div class="TypePadd">
              <div class="type_filter">
                <div class="H Type">Type</div>
                <div class="Type">
                  <nav>
                    <ul>
                      <li><span>{{CurrentType}}<div id="down-triangle"></div></span>
                        <ul id="Types">
                          <li @click="SelectedType(typeCard)" v-for="typeCard in AlltypesCard" :Key="typeCard"><span>{{ typeCard }}<div class="circle"></div></span></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="PricePadd">
              <div class="price_filter">
                <div class="H Price">Price</div>
                <div class="Price">
                  <input v-model="StartPrice" class="input_Price GeneralInput" type="number" placeholder="min"><span class="PriceSpan">-</span>
                  <input v-model="EndPrice" class="input_Price GeneralInput" type="number" placeholder="max"></div>
              </div>
            </div>
            <div class="DatePadd">
              <div class="date_filter">
                <div class="H Date">Dates</div>
                <div class="Dates"><span class="DatesSpan"><em>From</em></span><input v-model="StartDate" id="StartDate" class="input_Date" type="date"><span class="DatesSpan"><em>To</em></span><input v-model="EndDate" id="EndDate" class="input_Date" type="date" name=""></div>
              </div>
            </div>
          </div>
          <div class="SearchFilter">
            <div id="BoxSearch" style="width: 300px; padding: 0;">
              <input v-model="search" type="text" placeholder="Search..." id="Text">
              <img src="Images/icons8-search-32.png" alt="" style="width: 20px; opacity: 0.5;">
            </div>
          </div>
        </div>
      </div>
      <div class="PICS">
        <Card :CardContent="element" :index="index" v-for="(element, index) in filteredList" :key="(element._id)" />
      </div>
    </div>
    <!--OurServices End-->
    <!--Footer Start-->
    <!--Footer End-->
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import { defineComponent } from 'vue' // only for TS
// eslint-disable-next-line @typescript-eslint/no-var-requires
import json from '@/TestData/cards.json'
type CardType = {
    _id: string
    Price: string
    isActive: boolean
    picture: string
    Rating: number
    Type: string
    Title: string
    Descreption: string
    phone: string
    city: string
    address: string
    DateAdded: string
}
export default defineComponent({
  name: 'helpView',
  components: { Card },
  data () {
    return {
      ServicesArray: json,
      search: '',
      StartDate: '',
      EndDate: '',
      StartPrice: '',
      EndPrice: '',
      CurrentType: 'All'
    }
  },
  mounted () {
    console.log(this.ServicesArray)
  },
  methods: {
    Objesearch (obj: CardType, searchText: string) {
      var objectasstring = JSON.stringify(obj).toLowerCase()
      if (objectasstring.search(searchText.toLowerCase()) !== -1) {
        return true
      } else {
        return false
      }
    },
    SelectedType (type :string) {
      this.CurrentType = type
    }
  },
  computed: {
    filteredList () :Array<CardType> {
      // Filter Search
      return this.ServicesArray.filter((card) => {
        var SearchFilter = this.Objesearch(card, this.search)
        // Filter Date
        var StartDateFilter = true
        if (this.StartDate !== '') {
          StartDateFilter = new Date(this.StartDate) <= new Date(card.DateAdded.slice(0, -7))
        }
        var EndDateFilter = true
        if (this.EndDate !== '') {
          EndDateFilter = new Date(card.DateAdded.slice(0, -7)) <= new Date(this.EndDate)
        }
        // Filter Price
        var StartPriceFilter = true
        var EndPriceFilter = true
        if (this.StartPrice !== '') {
          StartPriceFilter = parseFloat(this.StartPrice) <= parseFloat(card.Price.slice(1))
        }
        if (this.EndPrice !== '') {
          EndPriceFilter = parseFloat(card.Price.slice(1)) <= parseFloat(this.EndPrice)
        }
        // Filter Type
        var Typefilter = this.CurrentType.toLowerCase().trim() === 'all' || this.CurrentType.toLowerCase().trim() === card.Type.toLowerCase().trim()
        return SearchFilter && StartDateFilter && EndDateFilter && StartPriceFilter && EndPriceFilter && Typefilter
      })
    },
    AlltypesCard () {
      var Array :Array<string> = []
      this.ServicesArray.forEach((element) => {
        if (Array.indexOf(element.Type) === -1) {
          Array.push(element.Type)
        }
      })
      return ['All'].concat(Array)
    }
  }
})
</script>

<style>
.Our {
    text-align: center;
    margin: 0;
    color: gray;
    padding: 0 200px;
    color: gray;
    font-size: 25px;
    font-weight: 300;
}

.PicP {
    display: flex;
    width: 90%;
    margin-top: 50px;
    box-shadow: 0 0 50px -15px #888;
    height: auto;
    border-radius: 10px;
    animation-duration: 2s;
    animation-name: example;
}

.RPicP {
    flex: 4;
}

.IMG {
    background-position: center;
    background-size: cover;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    min-height: 460px;
}

.LPicP {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
    margin-left: 50px;
    margin-right: 30px;
    padding: 30px 0;
}

.PP {
    height: auto;
    font-size: 25px;
    width: 70%;
    color: gray;
    line-height: 30px;
    font-weight: 300;
}

.OurServices {
    height: auto;
    margin-top: 80px;
    margin-bottom: 50px;
}

.PICS {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    color: #000000ab;
    font-weight: 800;
}
.Title_Time{
    display: flex;
}
.TitleCard{
    flex-basis: 100%;
}
.GreenCard{
    display: inline;
    font-size: 1.4em;
    padding: 0.2em 0.9em;
    background-color: rgba(147, 180, 27, 1);
    color: white;
    border-radius: 5px;
}
.Date_card{
    width: 8em;
    text-align: right;
    font-size : 23px
}
.Details{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.Price_card{
    color: rgba(147, 180, 27, 1);
    font-size: 42px;
    font-weight: 700;
}
.contant_card{
    display: flex;
    margin: auto;
    font-size: 23px;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    margin-right: 10px;
}
.Phone_card{
    display: flex;
    gap: 10px;
    padding: 0.1em 0.8em;
    border-right: solid #00000047;
}
.Phone{
    margin: auto;
    opacity: 0.5;
}
.Location_card{
    display: flex;
    gap: 10px;
    padding: 0.1em 0.8em;
}
.City{
    margin: auto;
    opacity: 0.5;
}
.TitleAllServices{
    font-size: 2em;
    font-weight: 500;
    margin: 50px;
    text-align: center;
}
.Filter{
    width: 90%;
    display: flex;
}
.Filter_cont{
    display: flex;
    justify-content: center;
}
.filters{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.SearchFilter{
    display: flex;
    align-items: center;
}
.Type{
    filter: drop-shadow(4px 6px 10px rgba(5, 5, 5, 0.31));
}
  nav {
    text-align: center;
    font-size: 1.25em;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
  }
  nav ul {
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    position: relative;
    background-color: white;
    border-radius: 0.4em;
}

  nav ul ul {
    display: none;
  }

  nav ul li:hover > ul {
    display: block;
    min-width: 100%;
  }

  nav ul li {
    width: 100%;
    text-align: left;
    border-bottom: 3px solid  rgba(147, 180, 27, 1);
  }

  nav ul li:hover {
    background: #f2f2f2;
  }

  nav ul li span {
    display: block;
    padding: 15px 10px;
    color: #2a2a2a;
    text-decoration: none;
  }

  nav ul ul {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 0;
    position: absolute;
    top: 100%;
  }

  nav ul ul li {
    float: none;
    border-bottom: 2px solid #eaeaea;
    position: relative;
  }

  nav ul ul li span {
    padding: 15px 10px;
    color: #838383;
    cursor: pointer;
  }

  nav ul ul li span:hover {
    background: rgba(147, 180, 27, 1);
    color: #fff;
  }

  #down-triangle {
    float: right;
    width: 0;
    height: 0;
    margin-top: 10px;
    border-top: 10px solid  rgba(147, 180, 27, 1);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .circle {
    float: right;
    display: inline;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    border: 3px solid rgba(147, 180, 27, 1);
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
  }
  .TypePadd{
    padding-right: 45px;
    border-right: 1px solid lightgray;
  }
  .type_filter{
    width: 255px;
  }
  .input_Price{
    width: 150px;
    height: 50px;
    background-color: #e7e7e7;
    border-radius: 5px;
    font-size: 17px;
  }
  .input_Date{
    width: 125px;
    height: 40px;
    background-color: #e7e7e7;
    border-radius: 5px;
  }
  .PricePadd{
    padding-left: 45px;
    padding-right: 45px;
    border-right: 1px solid lightgray;
  }
  .input_Price::placeholder{
    font-style: italic;
  }
  .DatePadd{
    padding-left: 45px;
    padding-right: 45px;
  }
  .DatesSpan{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 200;
  }
  .PriceSpan{
    margin-left: 10px;
    margin-right: 10px;
  }
  input{
    border: none;
    font-weight: 900;
    padding: 15px;
  }
  .H{
    font-size: 0.9em;
  }

  .GeneralInput::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  .GeneralInput::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  .GeneralInput[type=number]{
    appearance: textfield;
    -moz-appearance: textfield;
  }
   /* @keyframes example {
    0%   { transform: scaleX(0.9); opacity: 0;}
    100% {transform: scaleX(1); opacity:1}
  }  */

  @keyframes example {
    0%    {background-color: white; min-width: 0%;}
    50%   {background-color: #93B441; min-width: 40%;}
    50%   {background-color: #93B441; min-width: 60%;}
    100%  {background-color: white; max-width: 100%; }
  }
  @media (min-width:992px) and (max-width:1400px) {
    .Our{
        padding: 0 100px;
    }
}
@media (max-width:992px) {
  .Our{
    padding: 0px 50px;
  }
}
@media (max-width:854px) {
    .TypePadd{
        border: none;
    }
    .PricePadd{
      border: none;
    }
}
@media (max-width :992px) {
  .PP{
    width: 100%;
  }
}
@media (max-width:600px) {
    .Details{
        flex-direction: column;
        gap: 25px;
    }
    .Price_card{
        display: flex;
        justify-content: center;
    }
    .contant_card{
        margin: auto;
    }
}
@media (min-width:992px) and (max-width:1400px) {
    .Details{
        flex-direction: column;
        gap: 25px;
    }
    .Price_card{
        display: flex;
        justify-content: center;
    }
    .contant_card{
        margin: auto;
    }

}
@media (max-width:808px) {
    .contant_card{
        flex-direction: column;
        margin: auto;
    }
    .Phone_card{
        border: none;
    }
}
@media (max-width:1663px) {
    .Filter{
        flex-direction: column-reverse;
        gap: 50px;
    }
    .SearchFilter{
        justify-content: center;
    }
}
@media (max-width:1400px) {
    .filters{
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
    .PricePadd{
        border: none;
    }
}
@media (max-width:488px) {
    .date_filter{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    .Dates{
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }
}
@media (max-width:465px) {
    .Price{
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .price_filter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
