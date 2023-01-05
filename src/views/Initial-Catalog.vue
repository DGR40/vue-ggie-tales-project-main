<template>

<header style="background-color: #E7EDDE; height:60px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">🌳 Vueggie Tales</header>

<div id="init" style="justify-content:center; padding:2em; display:flex; align-items:center; justify-content:center;">

  <h1>Welcome to Vueggie Tales!</h1>
  <p>Fill out the info below to personalize your catalog. ✍🏻</p>
   <b-form-input
        id="input-formatter"
        class="w-50 m-2"
        v-model="userName"
        placeholder="Enter your name..."
        :formatter="formatter"
        @blur="updateName()"
      ></b-form-input>

      <b-dropdown variant="outline-dark" id="dropdown-form" text="Skill Level 🔨" ref="dropdown" class="w-50 m-2">
      <b-dropdown-form>
      <b-form-group label="Skill Level" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="beginner">Beginner</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="novice">Novice</b-form-radio>
       </b-form-group>
      </b-dropdown-form>
      </b-dropdown>

    <b-dropdown variant="outline-dark" id="dropdown-form" text="Favorite Vegetables 🌱" ref="dropdown" class="w-50 m-2">
      <b-dropdown-form scrollable>
      <b-form-group label="Favorite Vegetables" v-slot="{ ariaDescribedby }">
      <b-form-checkbox  :aria-describedby="ariaDescribedby" name="some-radios" value="beginner">Tomato</b-form-checkbox>
      <b-form-checkbox  :aria-describedby="ariaDescribedby" name="some-radios" value="novice">Carrots</b-form-checkbox>
      <b-form-checkbox :aria-describedby="ariaDescribedby" name="some-radios" value="novice">Peppers</b-form-checkbox>
      <b-form-checkbox :aria-describedby="ariaDescribedby" name="some-radios" value="novice">Spinach</b-form-checkbox>
      <b-form-checkbox :aria-describedby="ariaDescribedby" name="some-radios" value="novice">Lettuce</b-form-checkbox>

    </b-form-group>
    </b-dropdown-form>
    </b-dropdown>

  <b-button variant="outline-dark" class="w-50 m-2" @click="$router.push('/catalog')">Go to my catalog! ✨</b-button>
  </div>
</template>

<style>
  #init {
    display:flex;
    flex-direction: column;
  }
</style>

<script>
  export default {
    methods: {
      updateName() {
        console.log("blur");
        $userName = this.userName;
      }
    }
  };
</script>
