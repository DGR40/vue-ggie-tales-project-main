<template>

<header style="background-color: #E7EDDE; height:100px; width:100%; text-align: center; justify-content: center; flex-direction: column; display:flex;">NAME OF APP</header>

  <h1 class="mt-3 mx-4">Notification Center</h1>

<div class="mx-4">
  <h4 class="mt-4">Yesterday</h4>
  <b-card bg-variant="light" text-variant="secondary" header-text-variant="danger" lg="2" class="mt-4" header="Reminder (overdue)">
    <b-row>
      <b-col md="8">
          <b-card-text>
          Have you watered your plant today?
          </b-card-text>
      </b-col>

      <b-col md="4" mt="3">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </b-col>
    </b-row>
  </b-card>
</div>

<div class="mx-4">
  <h4 class="mt-4">December 22, 2022</h4>
  <b-card bg-variant="light" text-variant="secondary" header-text-variant="danger" lg="2" class="mt-4" header="Reminder (overdue)">
    <b-row>
      <b-col md="8">
          <b-card-text>
          Have you watered your plant today?
          </b-card-text>
      </b-col>

      <b-col md="4" mt="3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </b-col>
    </b-row>
  </b-card>
</div>
<BottomNav />
</template>

<script>
  import BottomNav from "../components/BottomNav.vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { BottomNav },
    data: () => ({
    selected: 3,
    options: [
      { id: 1, icon: 'fa-solid fa-house', title: 'Catalog', path: { name: "catalog" } },
      { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Learn', path: { name: "learn"} },
      { id: 3, icon: 'fa-solid fa-plus', title: 'Notification', path: { name: "Notification"} }
    ],
    options1: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
    }),
  };
</script>
