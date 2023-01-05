<template>

<header style="background-color: #E7EDDE; height:60px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">🌳 Vueggie Tales</header>

    <div id="article" style="justify-content:center; padding:2em; ">

      <b-button to="/learn" style="height:20px; width:15x; background-color:white; border-color:white" class="p-0 my-2">
        <font-awesome-icon icon="fa-solid fa-arrow-left" style="color:green;" />
      </b-button>

      <h2>5 Best Plants for Beginners 👦🏻</h2>
      <p>Introducing the best plants for beginner gardeners, with #1 being the easiest!</p>

      <b-card class="mt-4" title="5. Bell Broccoli 🥦">
      <b-card-text>
        This tree-looking plant only needs water when the soil dries out, so just be sure to keep an eye out for the soil weekly as conditions of the environment may differ.
      </b-card-text>
      <b-button to="/veg/belstar" style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)">View More</b-button>
      </b-card>

      <b-card class="mt-4" title="4. Butter Lettuce 🥬">
      <b-card-text>
        This plant only needs water every 1-4 weeks and is a popular houseplant that is difficult to kill.
      </b-card-text>
      <b-button to="/veg/butterhead" style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)">View More</b-button>

      </b-card>

      <b-card class="mt-4" title="3. Nantes Carrot 🥕">
      <b-card-text>
        Aside from its unique name, this plant creates its own "babies"! You can just let the soil dry out completely between waterings (really).
      </b-card-text>
      <b-button to="/veg/nantes" style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)">View More</b-button>

      </b-card>

      <b-card class="mt-4" title="2. Danvers Carrot 🥕">
      <b-card-text>
        It's well-known that these plants are easy to maintain since they already have water reservoirs! You can douse them weekly but just be sure that their soil is dry before another watering.
      </b-card-text>
      <b-button to="/veg/danvers" style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)">View More</b-button>

      </b-card>

      <b-card class="mt-4" title="1. Beefsteak Tomato 🍅">
      <b-card-text>
        This tomato is pretty indestructible. They prefer moderate levels of sunlight, but basically seem to thrive on neglect (and some watering).
      </b-card-text>
      <b-button to="/veg/beefsteak" style="background-color:hsla(160, 100%, 37%, 1); border-color:hsla(160, 100%, 37%, 1)">View More</b-button>

      </b-card>
    </div>

    <NavBottom />

  </template>

  <script>

    import NavBottom from '../components/BottomNav.vue';

    export default {
      components: { NavBottom },
      data: () => ({
      selected: 2,
      options: [
        { id: 1, icon: 'fa-solid fa-house', title: 'Catalog', path: { name: "catalog" } },
        { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Learn', path: { name: "learn"} },
        { id: 3, icon: 'fa-solid fa-plus', title: 'Profile', path: { name: "profile"} }
      ]
      }),
    };
  </script>
