<template>
  <div class="bar m-0 p-0 fixed-bottom">
    <b-container class="b-flex" >
      <b-row class="row">
        <b-col @click='goToTab("/catalog")'>
          <font-awesome-icon icon="fa-solid fa-leaf" v-if="(this.$route.name == 'catalog' || this.$route.name.includes('veg'))" style="color:green;" />
          <font-awesome-icon icon="fa-solid fa-leaf" v-else />
        </b-col>

        <b-col @click='goToTab("/learn")'>
          <font-awesome-icon icon="fa-solid fa-book-open" v-if="(this.$route.name == 'learn' || this.$route.name == 'article')" style="color:green" />
          <font-awesome-icon icon="fa-solid fa-book-open" v-else />
        </b-col>

        <b-col @click="goToTab('/notifications')">

          <font-awesome-icon v-if="this.$route.name == 'notifications'" icon="fa-solid fa-bell" style="color:green;" />
          <font-awesome-icon v-else icon="fa-solid fa-bell" style="color:black;" />
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<style>
   .bar {
    background-color:rgb(231, 237, 222);
  }
  .row {
    display:flex;
    justify-items: center;
    height:60px;
  }

  .col {
    display:flex;
    justify-content: center;
    flex-direction:column;
    text-align:center;
  }

</style>

<script>

  import router from '../router';

  export default {
    methods: {
      goToTab(tab) {
        console.log("this")
        router.push(tab)
        console.log(this.$route.name);
      }
    }
  }
</script>
