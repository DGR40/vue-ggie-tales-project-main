<template>

<header style="background-color: #E7EDDE; height:60px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">ðģ Vueggie Tales</header>

  <div id="learn" style="justify-content:center; padding:2em; ">

  <h1>Learn</h1>
  <p>Your go-to page for gardening education. ð</p>

  <b-card lg="2" class="mt-4" title="Tips from Master Gardeners ðĻðŧâðū">
    <b-card-text>
    Basic tips for gardening, from master gardeners themselves.
    </b-card-text>
    <b-button to='' class='' style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)"> View More </b-button>
  </b-card>

    <b-card class="mt-4" title="Essential Tools For Gardening ðĻ">
    <b-card-text>
    There are a few important tools that every gardener should have on hand.
    </b-card-text>
      <b-button to='' class='' style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)"> View More </b-button>
    </b-card>

    <b-card class="mt-4" title="5 Best Plants for Beginners ðŠī">
    <b-card-text>
    Learn about the 5 best plants to start with for beginners!
    </b-card-text>
      <b-button to='/article' class='' style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)"> View More </b-button>
    </b-card>

    <b-card class="mt-4" title="How to Start Your Garden ðŧ">
    <b-card-text>
    Learn the ins and outs of how to start a garden for first-time gardeners.
    </b-card-text>
      <b-button to='' class='' style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)"> View More </b-button>
    </b-card>

  </div>
    <div style= "height: 100px;"> </div>

    <BottomNav />

</template>

<script>
  import BottomNav from "../components/BottomNav.vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { BottomNav }
};
</script>
