<template>
  <div class="tag-container" :style="`--element-color: ${color}`" style="display: flex; align-items:center; justify-content:center">
    <label class="tag-text">{{type}}</label>
  </div>
</template>

<style>
.tag-container {
  cursor:pointer;
  background-color: var(--element-color);
  border-radius:5px;
  width: fit-content;
  padding: 0px 5px;
  margin-right: 10px;
}

.tag-text {
  font-size: 12px;
}
</style>

<script>
  export default {
    props: {
    type: {
      type: String,
    },
    color: {
      type: String
    }
  }
  };
</script>
