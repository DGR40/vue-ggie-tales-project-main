<template>
  <div class="card-container" @click="goToVegProfile(veg['url'])" style="cursor:pointer; width:70px;"><h4 class="m-2">{{veg["name"]}}</h4>
    <b-img :src="getImageUrl(pic)" style="width: 100%; height:100%; object-fit: cover;" />
  </div>
</template>

<style>

.card-container {
  border:1px solid grey;
  border-radius:5px;
  margin:5px;
  min-width:180px;
}
</style>

<script>
import router from '../router';
import TagBubble from '../components/TagBubble.vue';

  export default {
    props: {
    veg: {
      type: Object,
    },
    pic: {
      type: String,
    }
  },
    methods: {
      goToVegProfile(route) {
        console.log(`route: ${route}`);
        router.push(`/veg/${route}`);
      }
    },
    components: {TagBubble}
  };
</script>
