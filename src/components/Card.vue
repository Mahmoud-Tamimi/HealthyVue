<template>
 <div v-if="CardContent" class="PicP">
   <div class="LPicP">
     <div class="Title_Time">
        <div class="TitleCard">
           <div><h1>{{CardContent.Title}}</h1></div>
           <div class="GreenCard"><span>{{CardContent.Type}}</span></div>
        </div>
        <span class="Date_card">{{ SliceDate }}</span>
     </div>
     <p class="PP">{{CardContent.Descreption}}</p>
       <div class="Details">
         <div class="Price_card">{{CardContent.Price}}</div>
         <div class="contant_card">
           <div class="Phone_card"><div><img src="@/assets/Images/Vector-1.svg" alt=""></div><div class="Phone">{{CardContent.phone}}</div></div>
           <div class="Location_card"><div><img src="@/assets/Images/Vector.svg" alt=""></div> <div class="City">{{CardContent.city}}</div></div>
           <span class="IndexARRAY">{{ index === undefined ? '' : index + 1 }}</span>
         </div>
       </div>
   </div>
   <div class="RPicP IMG" :style="`background-image: url(${CardContent.picture}),url(@/assets/Images/DefaultImage.svg);`">
   </div>
 </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue'

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
  props: {
    CardContent: { type: Object as PropType<CardType> },
    index: { type: Number }
  },
  computed: {
    SliceDate: function () {
      if (!this.CardContent) return ''
      return new Date(this.CardContent.DateAdded.replaceAll(' ', '')).toUTCString().slice(4, 16)
    }

  }
})
</script>
<style>
</style>
