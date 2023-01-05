
<script>
  import { RingBottomNavigation } from "bottom-navigation-vue";
  import BottomNav from '../components/BottomNav.vue';
  import "bottom-navigation-vue/dist/style.css";
  import Card from '@/components/Card.vue';
  import TagBubble from '@/components/TagBubble.vue';

  export default {
    components: { RingBottomNavigation, Card, BottomNav },
    data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: 'fa-solid fa-house', title: 'Catalog', path: { name: "catalog" } },
      { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Learn', path: { name: "learn"} },
      { id: 3, icon: 'fa-solid fa-plus', title: 'Profile', path: { name: "profile"} }
    ]
    }),
  };
</script>

<template>

<header style="background-color: #E7EDDE; height:60px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">🌳 Vueggie Tales</header>

<b-button to="/catalog" style="height:20px; width:15px; background-color:white; border-color:white; margin-top:2em; padding-left: 2em;">
        <font-awesome-icon icon="fa-solid fa-arrow-left" style="color:green;" />
      </b-button>

  <div style="display:flex; flex-direction: column; padding:2em;">



    <img :src="getImageUrl($allData[$route.params.veg_id]['photo'])" style="width: 100%; height: 100%; border-radius:2%;" />
    <h1 class="mt-2">{{$allData[$route.params.veg_id]['name']}}</h1>

    <b-card class="mt-4" title="Rating">
      <b-card-text style="display:flex; flex-direction:row">
        <h1 v-for="star in $allData[$route.params.veg_id]['rating']">⭐️</h1>
      </b-card-text>
      </b-card>

    <b-card class="mt-4" title="🔖 Tags">
      <b-card-text>
        {{$allData[$route.params.veg_id]['difficultiness']}}, {{$allData[$route.params.veg_id]['size']}}, {{$allData[$route.params.veg_id]['taste']}}
      </b-card-text>
      </b-card>

      <b-card class="mt-4" title="📄 About">
      <b-card-text>
        {{$allData[$route.params.veg_id]['about']}}
      </b-card-text>
      </b-card>

      <b-card class="mt-4" title="📕 Planting Guide">
      <b-card-text>
        {{$allData[$route.params.veg_id]['plant_guide']}}
      </b-card-text>
      </b-card>

  </div>
  <div style= "height: 100px;"> </div>

  <BottomNav />

</template>
