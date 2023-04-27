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
                      <li><span id="TypeFilterSelected">All<div id="down-triangle"></div></span>
                        <ul id="Types">
                          <li><span onclick="SelectType(this)">All<div class="circle"></div></span></li>
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
                <div class="Price"><input onchange="FilterArray()" id="StartPrice" class="input_Price GeneralInput" type="number" placeholder="min"><span class="PriceSpan">-</span><input onchange="FilterArray()" id="EndPrice" class="input_Price GeneralInput" type="number" placeholder="max"></div>
              </div>
            </div>
            <div class="DatePadd">
              <div class="date_filter">
                <div class="H Date">Dates</div>
                <div class="Dates"><span class="DatesSpan"><em>From</em></span><input onchange="FilterArray()" id="StartDate" class="input_Date" type="date"><span class="DatesSpan"><em>To</em></span><input onchange="FilterArray()" id="EndDate" class="input_Date" type="date" name=""></div>
              </div>
            </div>
          </div>
          <div class="SearchFilter">
            <div id="BoxSearch" style="width: 300px; padding: 0;">
              <input onkeypress="KEyReader(event)" onclick="KEyReader(event)" type="text" placeholder="Search..." id="Text">
              <img src="Images/icons8-search-32.png" alt="" style="width: 20px; opacity: 0.5;">
            </div>
          </div>
        </div>
      </div>
      <div class="PICS">
        <Card :CardContent="element" :index="index" v-for="(element, index) in ServicesArray" :key="(element._id)" />
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

export default defineComponent({
  name: 'helpView',
  components: { Card },
  data () {
    return {
      ServicesArray: [
        {
          _id: '6422b60ddfe36847f18febea',
          isActive: false,
          Price: '$1550.06',
          picture: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 0,
          Type: 'health awareness',
          Title: 'NULLA ALIQUA',
          Descreption: 'Est enim nostrud duis in quis eu ut non proident. Excepteur voluptate ea dolore non in dolor. Magna deserunt sunt veniam in esse laboris et consequat.',
          phone: '+1 (868) 562-2847',
          city: 'Freeburn',
          address: '407 Garnet Street, Dawn, West Virginia, 5434',
          DateAdded: '2019-10-09T04:00:24 -03:00'
        },
        {
          _id: '6422b60d137438e504a94ae3',
          isActive: true,
          Price: '$3021.16',
          picture: 'https://images.pexels.com/photos//pexels-photo-.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 2,
          Type: 'personal service',
          Title: 'QUIS DESERUNT',
          Descreption: 'Elit esse commodo fugiat voluptate laboris voluptate amet ad. Irure minim amet minim consectetur excepteur cupidatat. Occaecat excepteur tempor elit veniam. Adipisicing ad proident culpa incididunt adipisicing minim dolore aliqua minim amet amet deserunt esse enim. Elit nulla exercitation esse non voluptate id mollit tempor dolore cupidatat eu ea consectetur. Cillum exercitation nostrud non sit nisi.',
          phone: '+1 (808) 444-2101',
          city: 'Cascades',
          address: '652 Jerome Avenue, Noxen, Virginia, 3902',
          DateAdded: '2017-10-03T10:39:49 -03:00'
        },
        {
          _id: '6422b60d2fdac58c8896d657',
          isActive: true,
          Price: '$3320.53',
          picture: 'https://images.pexels.com/photos/533343/pexels-photo-533343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 7,
          Type: 'foodics',
          Title: 'CULPA ALIQUIP QUI',
          Descreption: 'Quis consectetur qui magna sit. Occaecat deserunt sunt ex exercitation tempor magna pariatur occaecat voluptate. Enim sit amet ex deserunt mollit commodo id duis veniam laboris nostrud aliqua proident in.',
          phone: '+1 (898) 407-3750',
          city: 'Hamilton',
          address: '157 Loring Avenue, Basye, North Carolina, 6947',
          DateAdded: '2014-08-11T02:46:00 -03:00'
        },
        {
          _id: '6422b60d023424f6b3ad943d',
          isActive: false,
          Price: '$2885.04',
          picture: 'https://images.pexels.com/photos/1640768/pexels-photo-1640768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 7,
          Type: 'foodics',
          Title: 'TEMPOR ENIM DESERUNT CUPIDATAT',
          Descreption: 'Officia ullamco magna excepteur anim est id sint ut. Fugiat nostrud qui duis consequat ad nisi enim. Proident ut sint incididunt fugiat fugiat eiusmod non. Cupidatat aute dolor excepteur aliqua excepteur commodo velit culpa ullamco culpa ullamco veniam nostrud adipisicing. Duis officia eiusmod esse esse consequat cupidatat ea laboris ut elit incididunt amet. Reprehenderit laboris id laborum sit.',
          phone: '+1 (824) 424-2630',
          city: 'Reno',
          address: '708 Commerce Street, Ola, Tennessee, 3955',
          DateAdded: '2019-03-30T03:33:39 -03:00'
        },
        {
          _id: '6422b60df7c57316ce995a59',
          isActive: false,
          Price: '$3907.41',
          picture: 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 1,
          Type: 'public service',
          Title: 'ID',
          Descreption: 'Est non ullamco ea ullamco pariatur commodo enim dolor ex pariatur amet ipsum ea ut. Do duis in ullamco elit id occaecat. Elit dolor consectetur do laboris veniam laboris adipisicing elit anim nulla. Velit qui incididunt culpa irure eu amet ut consectetur.',
          phone: '+1 (840) 511-3189',
          city: 'Goodville',
          address: '312 Henderson Walk, Snowville, Wyoming, 4629',
          DateAdded: '2021-09-09T09:33:41 -03:00'
        },
        {
          _id: '6422b60d7178187888712611',
          isActive: true,
          Price: '$1650.38',
          picture: 'https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'personal service',
          Title: 'ULLAMCO ANIM QUIS EIUSMOD',
          Descreption: 'Culpa sit ipsum labore aute cupidatat officia id in do. Veniam fugiat culpa proident veniam est cillum adipisicing eu nostrud labore occaecat ipsum labore. Consequat amet mollit dolore sit proident. Reprehenderit consequat ipsum dolore culpa nostrud laborum non et anim consequat exercitation pariatur. Irure laboris mollit eu ipsum dolor mollit magna id. Id veniam non reprehenderit sint ex ut ex nostrud. Dolore officia velit irure dolore.',
          phone: '+1 (985) 492-2118',
          city: 'Dellview',
          address: '989 Pierrepont Place, Kanauga, Indiana, 5414',
          DateAdded: '2018-12-17T07:26:00 -03:00'
        },
        {
          _id: '6422b60d79d02cb996fa6406',
          isActive: true,
          Price: '$3936.22',
          picture: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 2,
          Type: 'personal service',
          Title: 'NON DESERUNT',
          Descreption: 'Labore consectetur eu qui reprehenderit aute incididunt. Est excepteur sunt Lorem esse anim et elit ipsum amet labore veniam sint Lorem quis. Anim laboris eiusmod consectetur enim elit elit pariatur duis officia veniam fugiat culpa sint sint.',
          phone: '+1 (959) 565-2375',
          city: 'Logan',
          address: '889 Dank Court, Odessa, South Dakota, 250',
          DateAdded: '2015-11-26T09:41:10 -03:00'
        },
        {
          _id: '6422b60dacb4d08ba022df70',
          isActive: true,
          Price: '$3091.66',
          picture: 'https://images.pexels.com/photos/634030/pexels-photo-634030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'foodics',
          Title: 'ALIQUIP VOLUPTATE',
          Descreption: 'Dolor proident eu aute consequat veniam ipsum cillum sit excepteur eu do culpa. Exercitation commodo anim aute voluptate fugiat ut cillum sint laborum pariatur ad esse. Do culpa magna enim labore minim deserunt aliqua fugiat ad quis proident quis qui. Non amet velit nostrud esse elit sunt amet. Id nostrud eiusmod non esse elit nostrud id eu tempor Lorem mollit minim labore quis. Mollit irure laborum esse ea ullamco minim sunt ex labore ipsum. Ipsum fugiat Lorem sit sunt amet sint ea minim.',
          phone: '+1 (893) 526-3363',
          city: 'Thornport',
          address: '793 Sackman Street, Edgewater, Rhode Island, 4586',
          DateAdded: '2022-01-21T11:22:58 -03:00'
        },
        {
          _id: '6422b60db0e44c5c77cb6a74',
          isActive: false,
          Price: '$3579.82',
          picture: 'https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 4,
          Type: 'foodics',
          Title: 'VELIT',
          Descreption: 'Sit duis ad eiusmod aliqua amet cupidatat aute. Ex aliquip est sunt adipisicing eiusmod amet non proident irure officia nulla Lorem occaecat. Ullamco non tempor exercitation aliqua veniam Lorem dolore deserunt cupidatat anim exercitation dolor. Anim id cupidatat mollit ut exercitation id fugiat sint dolore. Voluptate sint incididunt quis magna duis laborum incididunt consectetur non quis. Voluptate ex voluptate velit duis in proident proident ex anim sit. Excepteur voluptate excepteur Lorem irure reprehenderit occaecat ad aute ea.',
          phone: '+1 (833) 438-3261',
          city: 'Eureka',
          address: '321 Colonial Court, Idamay, Wisconsin, 4689',
          DateAdded: '2020-01-20T06:24:15 -03:00'
        },
        {
          _id: '6422b60d3b8b642f037813ce',
          isActive: false,
          Price: '$1002.46',
          picture: 'https://images.pexels.com/photos/887824/pexels-photo-887824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 8,
          Type: 'foodics',
          Title: 'INCIDIDUNT ESSE CONSECTETUR',
          Descreption: 'Nulla magna ullamco quis minim ea quis mollit eu veniam mollit et exercitation. Incididunt sit mollit dolor eu laborum qui voluptate incididunt quis commodo ex eu. Lorem sit mollit qui cillum incididunt officia aliqua tempor elit aliquip. Eu minim sint voluptate irure proident excepteur est consequat. Laborum ad in excepteur voluptate dolore consequat eiusmod id adipisicing officia commodo occaecat et. Enim Lorem consectetur velit enim ipsum Lorem aute laboris deserunt deserunt. Deserunt pariatur magna id nulla commodo occaecat minim magna sint id duis sint aliquip.',
          phone: '+1 (937) 555-3799',
          city: 'Elfrida',
          address: '242 Arlington Avenue, Machias, Hawaii, 835',
          DateAdded: '2014-10-17T06:30:21 -03:00'
        },
        {
          _id: '6422b60d5808dd7992e10cd3',
          isActive: false,
          Price: '$3820.45',
          picture: 'https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 4,
          Type: 'foodics',
          Title: 'ALIQUIP',
          Descreption: 'Ex sint anim est Lorem voluptate minim dolore sit eiusmod sint irure. Aute nulla veniam non fugiat aute sit nulla quis est aute deserunt non ipsum. Excepteur dolor sunt minim ea proident reprehenderit aliqua sunt cillum aliqua id cillum sint reprehenderit. Ex enim do do voluptate. Labore esse qui nulla sit elit duis esse ut commodo aliquip. Laboris veniam laboris est consequat non labore pariatur ea anim id fugiat. Nulla id ex laborum nostrud nisi anim cupidatat sunt sit mollit consequat minim aute et.',
          phone: '+1 (826) 561-3826',
          city: 'Frystown',
          address: '353 Stillwell Avenue, Oretta, Oregon, 9968',
          DateAdded: '2015-11-18T06:49:27 -03:00'
        },
        {
          _id: '6422b60dde7ad698c7fa19f0',
          isActive: false,
          Price: '$2111.82',
          picture: 'https://images.pexels.com/photos/1196516/pexels-photo-1196516.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'personal service',
          Title: 'EU',
          Descreption: 'Officia laborum aute elit qui ad in cupidatat reprehenderit minim laborum consectetur aute minim. Et do pariatur quis ad eiusmod nulla enim do. Id occaecat sit excepteur irure voluptate consequat ex elit eiusmod incididunt quis. Lorem reprehenderit eiusmod est voluptate esse reprehenderit pariatur esse velit in ad enim nisi duis. Labore commodo minim amet ex consectetur elit culpa mollit cillum tempor est duis aute laborum.',
          phone: '+1 (819) 577-2848',
          city: 'Dargan',
          address: '957 Summit Street, Bentonville, New York, 3974',
          DateAdded: '2018-02-03T06:04:26 -03:00'
        },
        {
          _id: '6422b60ddd15a32aef28e17c',
          isActive: false,
          Price: '$2361.21',
          picture: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 8,
          Type: 'public service',
          Title: 'SINT MINIM',
          Descreption: 'Voluptate eiusmod mollit cupidatat magna nostrud sunt elit laborum tempor pariatur voluptate nostrud fugiat. Do do aute deserunt irure enim ullamco. Mollit elit exercitation deserunt ex excepteur adipisicing aliquip aute. Amet quis aliqua pariatur non consequat aliqua duis.',
          phone: '+1 (834) 496-2212',
          city: 'Welda',
          address: '596 Atlantic Avenue, Coloma, Ohio, 5207',
          DateAdded: '2023-03-11T11:09:28 -03:00'
        },
        {
          _id: '6422b60db849bf92259644d0',
          isActive: false,
          Price: '$3211.01',
          picture: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 10,
          Type: 'health awareness',
          Title: 'DOLOR NOSTRUD ESSE LABORE',
          Descreption: 'Ut aute irure dolor id Lorem consectetur id amet in sit. Nulla ex nostrud sint sunt laboris tempor ipsum magna laboris velit sint non. Ad sint laborum esse aliqua esse. Exercitation ea velit dolor excepteur adipisicing.',
          phone: '+1 (956) 596-3082',
          city: 'Beason',
          address: '242 Amersfort Place, Hinsdale, Kentucky, 4200',
          DateAdded: '2015-11-09T12:57:32 -03:00'
        },
        {
          _id: '6422b60d5798c9914b832448',
          isActive: true,
          Price: '$3264.97',
          picture: 'https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 1,
          Type: 'personal service',
          Title: 'VENIAM DO',
          Descreption: 'Amet nostrud voluptate aute excepteur velit do magna cupidatat adipisicing enim pariatur non non. Non eu occaecat pariatur culpa id amet reprehenderit ut voluptate nulla cupidatat. Anim velit non irure sunt pariatur eu. Occaecat sint velit do tempor adipisicing id ut enim veniam enim nulla officia quis.',
          phone: '+1 (987) 471-3287',
          city: 'Springhill',
          address: '938 Dunne Place, Stagecoach, South Carolina, 6582',
          DateAdded: '2022-02-27T02:46:18 -03:00'
        },
        {
          _id: '6422b60d9928a9481f9bc873',
          isActive: true,
          Price: '$1774.05',
          picture: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'public service',
          Title: 'DO AMET DOLORE',
          Descreption: 'Nulla consequat non tempor officia duis consectetur magna. In labore proident officia nulla quis. Reprehenderit sit qui officia labore ut tempor sunt. Do commodo occaecat sint ut aliqua anim elit magna do sunt cillum aliqua nisi. Nostrud irure pariatur deserunt occaecat ea non in.',
          phone: '+1 (919) 565-2266',
          city: 'Dunbar',
          address: '866 Lafayette Avenue, Blue, Oklahoma, 8528',
          DateAdded: '2018-11-16T08:05:49 -03:00'
        },
        {
          _id: '6422b60d849163916193f555',
          isActive: false,
          Price: '$1914.79',
          picture: 'https://images.pexels.com/photos/952482/pexels-photo-952482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 10,
          Type: 'personal service',
          Title: 'LABORUM OFFICIA CONSECTETUR',
          Descreption: 'Velit dolor commodo aliqua ullamco ipsum id elit qui ea voluptate enim consectetur id et. Id voluptate ex mollit excepteur adipisicing reprehenderit nostrud Lorem dolor. Irure ut esse incididunt esse anim sunt dolore et incididunt magna reprehenderit. Minim nulla et proident laborum anim fugiat eiusmod eu. Sint sunt qui irure cillum et quis eu sit commodo. Sint quis pariatur cillum reprehenderit labore excepteur nisi excepteur ullamco non. Nisi in cillum exercitation et tempor tempor fugiat amet laborum ipsum elit.',
          phone: '+1 (842) 422-3203',
          city: 'Healy',
          address: '917 Schenck Place, Garnet, District Of Columbia, 904',
          DateAdded: '2014-08-26T03:10:28 -03:00'
        },
        {
          _id: '6422b60dc07054f0856af731',
          isActive: false,
          Price: '$1909.81',
          picture: 'https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 2,
          Type: 'health awareness',
          Title: 'PARIATUR NISI AD',
          Descreption: 'Nisi magna et reprehenderit adipisicing incididunt exercitation. Consequat labore anim anim irure exercitation et dolore et id elit sunt aliqua aliqua Lorem. Ad mollit esse tempor ea commodo aliquip.',
          phone: '+1 (973) 437-2431',
          city: 'Neahkahnie',
          address: '627 Pierrepont Street, Haena, New Jersey, 2887',
          DateAdded: '2014-05-25T11:03:54 -03:00'
        },
        {
          _id: '6422b60d64774427a8283d6b',
          isActive: false,
          Price: '$2347.71',
          picture: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 3,
          Type: 'public service',
          Title: 'NISI',
          Descreption: 'Esse magna quis voluptate deserunt. Eiusmod occaecat cupidatat reprehenderit consequat ea incididunt proident ex veniam irure laborum sit. Adipisicing in culpa nisi veniam minim.',
          phone: '+1 (921) 501-3262',
          city: 'Lopezo',
          address: '225 Varet Street, Enlow, Idaho, 9259',
          DateAdded: '2018-09-23T01:59:27 -03:00'
        },
        {
          _id: '6422b60d6ac47f189916628d',
          isActive: true,
          Price: '$3087.50',
          picture: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 8,
          Type: 'foodics',
          Title: 'LOREM LOREM ALIQUIP',
          Descreption: 'In nulla qui ullamco nisi reprehenderit minim. Dolore anim voluptate ullamco sit proident adipisicing velit adipisicing sit eu magna amet id. Ipsum proident duis aliqua elit aliquip ut sint.',
          phone: '+1 (842) 557-3259',
          city: 'Vienna',
          address: '506 Moore Street, Virgie, Puerto Rico, 1455',
          DateAdded: '2021-09-26T11:28:37 -03:00'
        },
        {
          _id: '6422b60dea56cb4aed6f7c22',
          isActive: true,
          Price: '$1592.50',
          picture: 'https://images.pexels.com/photos/179912/pexels-photo-179912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'personal service',
          Title: 'CONSEQUAT',
          Descreption: 'Nostrud dolor magna enim incididunt dolore eiusmod. Non pariatur anim consequat tempor commodo esse aute pariatur incididunt ea Lorem ullamco. Irure esse enim velit mollit laborum et nostrud cupidatat sit cupidatat duis. Consequat aute culpa non elit et minim ea ex magna voluptate sint. Nisi fugiat irure officia reprehenderit. Ipsum consequat non culpa officia cillum commodo ullamco laboris fugiat culpa sunt quis mollit.',
          phone: '+1 (967) 471-2135',
          city: 'Wanamie',
          address: '857 Dooley Street, Lindisfarne, Mississippi, 3016',
          DateAdded: '2022-05-29T05:01:37 -03:00'
        },
        {
          _id: '6422b60df8979e368b3b64b6',
          isActive: true,
          Price: '$1577.43',
          picture: 'https://images.pexels.com/photos/321576/pexels-photo-321576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 10,
          Type: 'foodics',
          Title: 'ULLAMCO SINT',
          Descreption: 'Reprehenderit exercitation eiusmod aliqua commodo nisi mollit sint consectetur cupidatat. Aliqua anim nulla non aliqua et fugiat ullamco. Sint sint est sint nostrud ut ea esse duis. Incididunt eu esse consequat ipsum cillum ut id. Labore excepteur irure exercitation elit aliquip do consequat id voluptate. Proident mollit non anim adipisicing non ex ipsum minim. Quis eu culpa nisi aliqua fugiat exercitation amet ex velit.',
          phone: '+1 (863) 438-2385',
          city: 'Dixonville',
          address: '798 Troutman Street, Salunga, Michigan, 5629',
          DateAdded: '2018-09-01T02:15:17 -03:00'
        },
        {
          _id: '6422b60dc3419cd972a8d646',
          isActive: true,
          Price: '$3971.22',
          picture: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 3,
          Type: 'personal service',
          Title: 'SINT ANIM',
          Descreption: 'Lorem nostrud reprehenderit commodo dolore excepteur officia et commodo adipisicing. Voluptate incididunt deserunt incididunt enim anim nulla ad ex commodo sunt. Nostrud ea velit occaecat eu dolor incididunt irure esse adipisicing ea fugiat aliqua. Id sunt laboris Lorem dolore qui sunt occaecat enim quis aliqua commodo elit esse. Dolor irure cillum amet nulla fugiat. Amet quis minim consequat deserunt eu adipisicing aliqua labore elit deserunt ullamco.',
          phone: '+1 (800) 452-3265',
          city: 'Beaverdale',
          address: '419 Doscher Street, Muse, Utah, 5838',
          DateAdded: '2014-07-02T09:35:01 -03:00'
        },
        {
          _id: '6422b60de44fbfe06f92eb9c',
          isActive: true,
          Price: '$1089.73',
          picture: 'https://images.pexels.com/photos/566888/pexels-photo-566888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 7,
          Type: 'foodics',
          Title: 'ANIM EIUSMOD',
          Descreption: 'Eu proident enim cupidatat tempor exercitation. Enim incididunt commodo amet officia cillum ipsum irure ut. Aliquip elit veniam anim cillum aliquip laborum ea culpa. Laborum duis dolor nulla ipsum esse do commodo ad elit culpa. Magna reprehenderit nostrud est enim in incididunt ea quis dolore. Labore officia aliquip laboris duis sint in adipisicing qui mollit laboris commodo ad.',
          phone: '+1 (830) 436-2496',
          city: 'Moscow',
          address: '414 Leonard Street, Crawfordsville, Federated States Of Micronesia, 1838',
          DateAdded: '2022-09-25T01:20:56 -03:00'
        },
        {
          _id: '6422b60df0ffa4bd9cbcc34f',
          isActive: true,
          Price: '$3569.03',
          picture: 'https://images.pexels.com/photos/39308/pexels-photo-39308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 8,
          Type: 'foodics',
          Title: 'ELIT COMMODO UT DUIS',
          Descreption: 'In ad officia sunt proident enim consectetur eu. Aute proident Lorem ipsum occaecat consequat dolore pariatur aute dolore mollit. Laboris labore qui esse id esse exercitation cupidatat. Deserunt irure ad ipsum aute commodo consectetur culpa. Amet nulla elit duis aliquip in adipisicing cillum proident culpa laboris aliquip.',
          phone: '+1 (882) 579-2909',
          city: 'Thatcher',
          address: '272 Grand Street, Ahwahnee, Palau, 8759',
          DateAdded: '2023-02-14T06:19:32 -03:00'
        },
        {
          _id: '6422b60dae032b9f0caf33cd',
          isActive: false,
          Price: '$1686.21',
          picture: 'https://images.pexels.com/photos/3766257/pexels-photo-3766257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 0,
          Type: 'personal service',
          Title: 'INCIDIDUNT EST OFFICIA',
          Descreption: 'Occaecat occaecat est dolor incididunt elit est magna eu minim. Occaecat nostrud sit commodo aliquip sunt excepteur eu sit do officia minim anim labore quis. Adipisicing do elit nisi exercitation excepteur aute dolore incididunt ipsum. Mollit magna voluptate incididunt ullamco. In anim officia elit aliquip mollit anim ipsum ut sint velit est consectetur occaecat sit. Enim enim elit ipsum nisi ea.',
          phone: '+1 (950) 469-2961',
          city: 'Sisquoc',
          address: '800 Milford Street, Efland, Northern Mariana Islands, 3669',
          DateAdded: '2016-09-20T10:20:05 -03:00'
        },
        {
          _id: '6422b60d723429647a64c269',
          isActive: true,
          Price: '$2302.48',
          picture: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 6,
          Type: 'health awareness',
          Title: 'VENIAM',
          Descreption: 'Proident veniam aute aliquip excepteur exercitation nisi veniam ut. Irure cillum culpa laborum culpa sunt fugiat irure do commodo do nostrud nisi consequat fugiat. Laborum in ex commodo adipisicing deserunt tempor aliqua sit enim in et.',
          phone: '+1 (813) 572-3838',
          city: 'Vicksburg',
          address: '413 Quentin Road, Ryderwood, Kansas, 3341',
          DateAdded: '2016-06-11T03:11:28 -03:00'
        },
        {
          _id: '6422b60d42094c82de892672',
          isActive: false,
          Price: '$3032.83',
          picture: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 3,
          Type: 'personal service',
          Title: 'ESSE ALIQUIP',
          Descreption: 'Ex fugiat adipisicing ea velit aute. Excepteur amet eiusmod nostrud sunt esse culpa dolore excepteur. Ipsum do deserunt cupidatat adipisicing nulla aliquip nulla velit occaecat dolore aliquip eu non. Ut culpa dolor eiusmod est Lorem deserunt. Laborum cupidatat cupidatat duis dolor laborum incididunt id. Nisi minim amet velit duis id anim est pariatur adipisicing.',
          phone: '+1 (886) 545-3226',
          city: 'Hardyville',
          address: '141 Blake Court, Elrama, Marshall Islands, 874',
          DateAdded: '2019-03-10T06:26:54 -03:00'
        },
        {
          _id: '6422b60d07b34a59a4c24e00',
          isActive: false,
          Price: '$2633.36',
          picture: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 10,
          Type: 'health awareness',
          Title: 'CILLUM COMMODO DOLOR PROIDENT',
          Descreption: 'Ut quis adipisicing proident nisi fugiat voluptate in cillum officia do aute sunt. Nisi sint irure reprehenderit incididunt fugiat laboris ipsum dolor elit et ullamco. Ipsum anim sit sunt dolor sit nulla aliqua deserunt. Labore ea cupidatat consequat ea non fugiat id aliqua. Ipsum nulla culpa minim id laboris sunt nostrud esse officia. Do labore velit mollit aliqua commodo mollit.',
          phone: '+1 (824) 493-2780',
          city: 'Dorneyville',
          address: '657 Anthony Street, Roosevelt, Nebraska, 1154',
          DateAdded: '2015-12-16T10:25:18 -03:00'
        },
        {
          _id: '6422b60d81a34038130c7a48',
          isActive: true,
          Price: '$2777.42',
          picture: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 0,
          Type: 'public service',
          Title: 'ADIPISICING ET SUNT',
          Descreption: 'Elit aliquip dolor deserunt minim ut amet aliqua occaecat esse officia sint mollit. Elit est duis excepteur ipsum anim sit excepteur est eu laborum eu. Et eiusmod in est aliquip nulla qui ad mollit et sunt esse officia dolor ea.',
          phone: '+1 (816) 405-2070',
          city: 'Stouchsburg',
          address: '997 Nostrand Avenue, Zortman, California, 7061',
          DateAdded: '2021-04-26T10:49:41 -03:00'
        },
        {
          _id: '6422b60d85a99fbf2fe136be',
          isActive: true,
          Price: '$3202.64',
          picture: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 7,
          Type: 'health awareness',
          Title: 'VOLUPTATE VOLUPTATE PARIATUR ID',
          Descreption: 'Ex veniam sit Lorem ad commodo nulla proident irure ad est. Aliqua occaecat proident quis aliqua ullamco reprehenderit nisi commodo culpa duis anim quis sunt. Nostrud laborum in adipisicing consectetur amet eu dolore laborum aliqua elit eiusmod minim cupidatat. Proident dolor dolore anim cupidatat sit.',
          phone: '+1 (945) 474-3670',
          city: 'Guthrie',
          address: '473 Seeley Street, Staples, Nevada, 1442',
          DateAdded: '2014-04-23T05:18:31 -03:00'
        },
        {
          _id: '6422b60ddb990adce8a94587',
          isActive: false,
          Price: '$3752.82',
          picture: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'public service',
          Title: 'NULLA OFFICIA EX NISI',
          Descreption: 'Ad aute elit laboris occaecat minim aliqua culpa reprehenderit. Laboris et enim non culpa. Ad Lorem non eu sint laborum ut proident quis id deserunt minim ut commodo. Aute mollit et sint consequat proident sunt. Sit ipsum sit magna voluptate consequat consectetur ullamco commodo consectetur enim esse aliquip duis. Aliqua aute tempor veniam pariatur aliquip enim. Ullamco magna pariatur dolor velit elit voluptate veniam quis id.',
          phone: '+1 (813) 523-2175',
          city: 'Colton',
          address: '524 Kiely Place, Swartzville, Maine, 1155',
          DateAdded: '2022-07-09T02:48:01 -03:00'
        },
        {
          _id: '6422b60d4668b5a431be75d4',
          isActive: true,
          Price: '$1079.55',
          picture: 'https://images.pexels.com/photos/165776/pexels-photo-165776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 3,
          Type: 'public service',
          Title: 'REPREHENDERIT REPREHENDERIT OCCAECAT',
          Descreption: 'Irure nostrud dolor quis veniam qui ex. Sit dolor culpa eu esse et sit magna consequat anim mollit ipsum deserunt. Aliquip culpa amet esse nostrud. In non eu irure consectetur veniam aute cupidatat dolor ea Lorem velit cillum. Consectetur laboris occaecat laborum enim deserunt consectetur dolore. Pariatur adipisicing duis amet aliquip. Ex aute labore velit cupidatat.',
          phone: '+1 (938) 567-2298',
          city: 'Harleigh',
          address: '182 Ridgecrest Terrace, Vaughn, Colorado, 1502',
          DateAdded: '2019-01-29T03:08:54 -03:00'
        },
        {
          _id: '6422b60d02d85fb7d6a96fcd',
          isActive: true,
          Price: '$2354.82',
          picture: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'personal service',
          Title: 'UT',
          Descreption: 'Ex dolor qui ipsum magna id aliqua Lorem voluptate quis nisi elit esse sunt cupidatat. In consequat ad eiusmod et cupidatat aliquip irure esse occaecat ea. Fugiat excepteur consectetur mollit exercitation sunt ea qui. Laboris sint consequat ut laborum. Dolor cillum quis nisi commodo veniam pariatur cillum ea laborum.',
          phone: '+1 (921) 498-3174',
          city: 'Lacomb',
          address: '590 Bergen Court, Saticoy, Missouri, 5719',
          DateAdded: '2017-02-18T09:00:28 -03:00'
        },
        {
          _id: '6422b60d089b861aad1a1df7',
          isActive: true,
          Price: '$1198.98',
          picture: 'https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'personal service',
          Title: 'CUPIDATAT AMET AD',
          Descreption: 'Do nostrud proident fugiat dolor laboris cillum. Consequat anim eu non amet amet. Do sit amet aute nostrud amet quis non exercitation quis sit voluptate. Exercitation sunt non occaecat occaecat sunt ullamco. Anim minim est pariatur nulla eiusmod nulla dolore.',
          phone: '+1 (863) 508-2149',
          city: 'Sugartown',
          address: '929 Pioneer Street, Bascom, Virgin Islands, 5655',
          DateAdded: '2019-11-06T05:33:30 -03:00'
        },
        {
          _id: '6422b60def1ed012342e2ddf',
          isActive: true,
          Price: '$1908.62',
          picture: 'https://images.pexels.com/photos/1414131/pexels-photo-1414131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 4,
          Type: 'foodics',
          Title: 'CUPIDATAT NISI LABORUM',
          Descreption: 'Ipsum consequat consectetur eiusmod ex. Consequat ad magna sunt non. Occaecat do incididunt esse est aliquip mollit pariatur. Cupidatat mollit tempor pariatur adipisicing ut sunt dolor duis aute.',
          phone: '+1 (924) 571-2576',
          city: 'Kersey',
          address: '793 Village Court, Bellamy, Arizona, 6054',
          DateAdded: '2015-04-11T04:36:30 -03:00'
        },
        {
          _id: '6422b60dc95d3213389b2ffd',
          isActive: true,
          Price: '$2311.90',
          picture: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'health awareness',
          Title: 'ULLAMCO',
          Descreption: 'Velit aliqua irure pariatur nostrud et excepteur. Nulla aute mollit eiusmod aliquip proident magna cupidatat sit elit aute. Est sit ea consectetur voluptate in et excepteur sit eiusmod incididunt ullamco velit ad dolore. Proident pariatur mollit velit Lorem laborum. Nulla tempor duis qui ipsum ex anim eiusmod. Reprehenderit proident est est non consequat incididunt dolor exercitation cupidatat laborum occaecat incididunt amet velit. Qui veniam dolore ad dolor nulla ea adipisicing dolore irure ullamco occaecat anim.',
          phone: '+1 (962) 597-3132',
          city: 'Turpin',
          address: '920 Oxford Street, Moraida, Pennsylvania, 9358',
          DateAdded: '2016-08-07T04:04:43 -03:00'
        },
        {
          _id: '6422b60d16df838178948408',
          isActive: true,
          Price: '$3831.29',
          picture: 'https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 1,
          Type: 'health awareness',
          Title: 'ALIQUA EST',
          Descreption: 'Nostrud ut culpa aute tempor minim veniam incididunt ad laboris. Labore labore ipsum Lorem id incididunt duis pariatur Lorem. Incididunt ullamco proident tempor dolor. Elit irure id nulla excepteur et pariatur reprehenderit est.',
          phone: '+1 (883) 448-3908',
          city: 'Crayne',
          address: '261 Beaumont Street, Grill, Illinois, 909',
          DateAdded: '2020-10-30T02:58:56 -03:00'
        },
        {
          _id: '6422b60d1418bbd6fff546f8',
          isActive: false,
          Price: '$1661.53',
          picture: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'health awareness',
          Title: 'EA',
          Descreption: 'Anim dolor occaecat enim velit commodo anim officia minim quis velit labore aliquip. Deserunt et voluptate eu exercitation deserunt cupidatat sunt ut mollit labore exercitation elit adipisicing. Consectetur occaecat enim sit aliqua sunt aute. Id pariatur nulla velit pariatur eiusmod mollit. Anim amet mollit esse consectetur ut anim tempor reprehenderit et occaecat ad minim elit. Est deserunt laborum laboris nulla dolor sunt consequat fugiat adipisicing tempor.',
          phone: '+1 (802) 499-3622',
          city: 'Gorst',
          address: '588 Folsom Place, Drummond, Washington, 7370',
          DateAdded: '2014-07-20T11:20:49 -03:00'
        },
        {
          _id: '6422b60dff91e4c50e1acd15',
          isActive: false,
          Price: '$1792.82',
          picture: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 10,
          Type: 'personal service',
          Title: 'PARIATUR MAGNA',
          Descreption: 'Tempor ullamco commodo velit Lorem nisi in velit non laboris ad dolor. Dolore ex consectetur mollit in nostrud ea fugiat. Magna laborum qui sunt esse est consequat ea. Sint ea irure nulla anim ullamco voluptate do minim. Reprehenderit veniam sint reprehenderit deserunt deserunt aute in. Sit ea mollit et consequat quis exercitation enim incididunt nisi magna anim reprehenderit qui.',
          phone: '+1 (918) 595-2884',
          city: 'Orin',
          address: '325 Allen Avenue, Fairhaven, Delaware, 363',
          DateAdded: '2022-04-08T01:44:22 -03:00'
        },
        {
          _id: '6422b60d3a661b9c30f1f0c9',
          isActive: false,
          Price: '$3138.68',
          picture: 'https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 1,
          Type: 'public service',
          Title: 'MINIM COMMODO CONSEQUAT',
          Descreption: 'Deserunt dolore sint Lorem ea aliquip excepteur magna excepteur velit consequat. Irure esse ipsum excepteur nostrud qui ipsum elit est magna sit dolore. Ea esse amet voluptate sunt adipisicing in veniam ad. Elit in veniam do culpa exercitation nostrud sit do sint et laborum anim quis pariatur.',
          phone: '+1 (924) 485-2675',
          city: 'Cliff',
          address: '449 Willoughby Street, Eagletown, Iowa, 1913',
          DateAdded: '2019-12-29T08:27:30 -03:00'
        },
        {
          _id: '6422b60dc8c31fb2f996908e',
          isActive: true,
          Price: '$2971.93',
          picture: 'https://images.pexels.com/photos/556414/pexels-photo-556414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'health awareness',
          Title: 'ALIQUA PARIATUR',
          Descreption: 'Fugiat laboris consequat cupidatat fugiat consectetur aliquip ad deserunt non. Quis laboris proident occaecat culpa non labore aliquip culpa do sint aliqua voluptate. Eu aliqua aliqua deserunt id. Fugiat aliqua cillum eu consectetur eu veniam cillum nisi ipsum deserunt. Aliquip non reprehenderit ipsum reprehenderit exercitation et. Amet proident pariatur commodo elit consectetur excepteur deserunt occaecat ad officia voluptate anim. Enim ad ex esse aute deserunt mollit aliquip fugiat do esse et consequat occaecat sint.',
          phone: '+1 (999) 460-3933',
          city: 'Cotopaxi',
          address: '489 Highland Avenue, Lloyd, Minnesota, 3729',
          DateAdded: '2022-01-30T10:41:06 -03:00'
        },
        {
          _id: '6422b60d1cb2f6e800953866',
          isActive: false,
          Price: '$3701.03',
          picture: 'https://images.pexels.com/photos/1089144/pexels-photo-1089144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 1,
          Type: 'personal service',
          Title: 'EST',
          Descreption: 'In duis adipisicing dolore dolore anim ullamco ipsum aute in aute occaecat nostrud velit ex. Veniam ea enim esse deserunt sint in enim excepteur adipisicing. Id do enim exercitation veniam. Anim voluptate eu ea duis consequat. Minim irure eiusmod est fugiat eu enim cupidatat.',
          phone: '+1 (971) 443-3560',
          city: 'Spokane',
          address: '659 Love Lane, Garfield, New Mexico, 7864',
          DateAdded: '2014-12-25T01:43:37 -03:00'
        },
        {
          _id: '6422b60dc97e923a3dbdacdd',
          isActive: false,
          Price: '$2081.33',
          picture: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 5,
          Type: 'personal service',
          Title: 'LABORE',
          Descreption: 'Quis proident ut ullamco mollit culpa ullamco deserunt culpa ea tempor consequat qui magna consequat. Id in excepteur duis qui ex adipisicing Lorem deserunt. Mollit commodo enim exercitation velit adipisicing est. Deserunt nisi eiusmod voluptate incididunt eiusmod ut.',
          phone: '+1 (855) 568-2986',
          city: 'Loma',
          address: '728 Colonial Road, Cresaptown, Louisiana, 5624',
          DateAdded: '2016-11-13T08:18:06 -03:00'
        },
        {
          _id: '6422b60d6cb2b9bc71721f6b',
          isActive: false,
          Price: '$3414.34',
          picture: 'https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 7,
          Type: 'health awareness',
          Title: 'CUPIDATAT DUIS QUI',
          Descreption: 'Lorem officia et dolore ea do incididunt culpa consequat enim mollit. Irure nisi minim consequat occaecat culpa aute aliqua reprehenderit laborum veniam et incididunt do. Id laborum ipsum tempor ex laboris ea.',
          phone: '+1 (909) 402-2103',
          city: 'Rivera',
          address: '377 Woodhull Street, Kent, Texas, 7658',
          DateAdded: '2014-01-11T03:10:41 -03:00'
        },
        {
          _id: '6422b60df6e7ac25d162be61',
          isActive: true,
          Price: '$1270.01',
          picture: 'https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'personal service',
          Title: 'CUPIDATAT CULPA ADIPISICING CONSECTETUR',
          Descreption: 'Excepteur in velit reprehenderit aliqua. Ipsum mollit eu minim officia reprehenderit dolore ex magna dolor cillum officia aliquip excepteur. Dolor aliqua commodo dolore ea est ut aute do sunt aute nulla deserunt do ullamco. Qui pariatur amet laboris laborum eu adipisicing cupidatat esse incididunt laborum elit.',
          phone: '+1 (811) 593-3508',
          city: 'Mayfair',
          address: '484 Jay Street, Fairacres, North Dakota, 1910',
          DateAdded: '2015-03-31T06:05:57 -03:00'
        },
        {
          _id: '6422b60db78949e503479b0c',
          isActive: true,
          Price: '$2269.78',
          picture: 'https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'health awareness',
          Title: 'QUIS FUGIAT QUIS VELIT',
          Descreption: 'Pariatur proident minim pariatur id minim. Irure laboris cillum consectetur laboris est dolor. Tempor velit magna proident tempor in amet aute enim veniam duis. Id duis amet velit incididunt in sint qui dolore anim adipisicing laboris consectetur incididunt irure.',
          phone: '+1 (951) 476-3522',
          city: 'Bath',
          address: '613 Rockaway Avenue, Marienthal, Connecticut, 9427',
          DateAdded: '2014-04-10T11:40:49 -03:00'
        },
        {
          _id: '6422b60d87efd53d361c7295',
          isActive: false,
          Price: '$2325.13',
          picture: 'https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 2,
          Type: 'foodics',
          Title: 'DO',
          Descreption: 'Laboris mollit magna veniam elit dolor cillum nulla amet anim esse consectetur in ipsum. Sit ipsum incididunt enim occaecat mollit veniam eu reprehenderit. Occaecat magna elit aute ad est laborum laborum aute anim proident adipisicing minim. Cillum velit dolore dolore incididunt excepteur eu mollit laborum. Sit ex quis dolor pariatur pariatur. In elit labore nostrud voluptate esse esse consequat mollit elit tempor adipisicing qui tempor. Veniam id consectetur sint quis sint pariatur.',
          phone: '+1 (918) 519-3691',
          city: 'Alden',
          address: '797 Portland Avenue, Naomi, Vermont, 6222',
          DateAdded: '2016-07-02T05:21:56 -03:00'
        },
        {
          _id: '6422b60dd42a4047c3bfd6e2',
          isActive: true,
          Price: '$2865.80',
          picture: 'https://images.pexels.com/photos/196668/pexels-photo-196668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 6,
          Type: 'foodics',
          Title: 'EST VOLUPTATE',
          Descreption: 'Commodo eiusmod dolore id officia ex deserunt esse anim in qui. Eu quis nostrud quis nulla laborum aute. Nostrud sunt amet ipsum duis nostrud proident eu in consectetur consequat elit. Ea ea ipsum nisi qui dolor nisi sint non est cupidatat occaecat magna. Mollit aute occaecat irure pariatur do fugiat irure nostrud cupidatat ullamco excepteur dolor commodo.',
          phone: '+1 (854) 526-2614',
          city: 'Southmont',
          address: '295 Schaefer Street, Carbonville, Guam, 9625',
          DateAdded: '2016-07-13T06:46:58 -03:00'
        },
        {
          _id: '6422b60db83b1ca52a99306c',
          isActive: true,
          Price: '$2628.58',
          picture: 'https://images.pexels.com/photos/2208836/pexels-photo-2208836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700',
          Rating: 9,
          Type: 'health awareness',
          Title: 'TEMPOR EXCEPTEUR',
          Descreption: 'Laboris aute ex adipisicing amet minim est elit enim et cupidatat ut sint. Nulla nostrud incididunt nostrud dolore incididunt officia mollit veniam ullamco commodo. Officia ad sit ea elit mollit nulla velit. Laborum veniam nulla ex commodo.',
          phone: '+1 (835) 464-3300',
          city: 'Delshire',
          address: '803 Wilson Street, Olney, American Samoa, 2833',
          DateAdded: '2021-06-01T05:57:21 -03:00'
        }
      ]
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
</style>
