<template>
<header style="background-color: #E7EDDE; height:60px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">🌳 Vueggie Tales</header>
    <div id="catalog" style="justify-content:center; padding:2em; ">
    <h1>Hello, {{$userName}} 👋 </h1>

     <label for="tags-basic">Search for varieties or categories below ⤵️</label>

     <b-container style="padding:0px;" :class="{overflow: isOverflown}">
      <b-row>
        <b-col cols="8" class="pl-2" style="padding-right:0px;">
       <b-form-tags id="tag-field" input-id="tags-basic" v-model="searchTerms"  placeholder="Example: tomato" addButtonText="Add"></b-form-tags>

        </b-col>
        <b-col class="p-0" style="margin-right:1em;">
          <b-button @click="renderResults()" style="background-color:#E7EDDE;color:black; border-color:grey;">Search</b-button>
        </b-col>
      </b-row>
     </b-container>


    <h4 class="my-2">Add Tags 🔖</h4>

    <div style="display: flex; flex-direction: row;" class="pb-2" >
      <TagBubble  v-for="tag in tags" :type=tag.name :color=tag.color @click="addToSearchTerms(tag)" />
    </div>

    <h4 v-if="searchTerms.length == 0" class="mt-2">Suggested for You ☝️{{search}}</h4>
    <h4 class="mt-2" v-else>Based on Search 🔍
    </h4>



    <div class="cardWrapper" style="display:flex; flex-direction:row; overflow-x: scroll;">
    <div v-for="veg in this.results">
        <Card :veg="veg" :pic="veg['photo']" />
    </div>
    </div>

    <h4 class="my-2">Suggested for Location 📍</h4>
    <div style="display:flex; flex-direction:row; overflow-x: scroll;">
    <div  v-for="veg in this.carrot">
        <Card :veg="veg" :pic="veg['photo']" />
    </div>
  </div>

  <h4 class="my-2">Suggested for Summer</h4>
  <div style="display:flex; flex-direction:row; overflow-x: scroll;">
    <div  v-for="veg in this.all">
        <Card :veg="veg" :pic="veg['photo']" />
    </div>
  </div>






  <div style= "height: 100px;"> </div>
  <BottomNav />
  </div>
</template>

<style>
  #catalog {
    display:flex;
    flex-direction: column;
  }

  .overflow {
    padding-bottom: 3em !important;
  }
</style>

<script>
import TagBubble from "@/components/TagBubble.vue";
import { RingBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import Card from "../components/Card.vue";
import BottomNav from '@/components/BottomNav.vue';

export default {
  components: { BottomNav, Card, TagBubble },
  methods: {
    addToSearchTerms(tag) {
      this.searchTerms.push(tag.name);
      console.log(`pushing ${tag.name}`);
      if (this.searchTerms.length > 2) {
        this.isOverflown = true;
      } else {
        this.isOverflown = false;
      }
    },
    renderResults() {
      console.log("pressed!")
      console.log(this.searchTerms)
      if (this.searchTerms.includes("Easy Care") && this.searchTerms.includes("Low Light") && this.searchTerms.includes("Small")) {
        console.log("target search")
        this.results = this.$tomatoData
      }
      }
    },
  computed: {
    searchTermLength() {
      return this.searchTerms.length
    }
  },
  data: () => ({
  tags: [
    {"name" : "Easy Care", "color" : "#E7EDDE"},
    {"name" : "Low Light", "color" : "#E7EDEE"},
    {"name" : "Perennial", "color" : "#E7EDFE"},
    {"name" : "Large", "color" : "#E7EDCE"},
    {"name" : "Medium", "color" : "#E7EDBE"},
    {"name" : "Small", "color" : "#E7EDAE"},

  ],
  selected: 1,
  options: [
    { id: 1, icon:'', title: 'Catalog', path: { name: "catalog" } },
    { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Learn', path: { name: "learn"} },
    { id: 3, icon: 'fa-solid fa-plus', title: 'Notifications', path: { name: "profile"} }
  ],
  isOverflown: false,
  searchTerms: [],
  tomatoes: {},
  lettuce: {},
  carrot: {},
  broccoli: {},
  all: {},
  results : {}
   }),
   created: function() {
    this.tomatoes = this.$tomatoData
    this.lettuce = this.$lettuceData
    this.broccoli = this.$broccoliData
    this.carrot = this.$carrotData
    this.results = this.$mixedData
    this.search = this.$searchTerms;
    this.all = this.$allData;
  },
};
</script>
