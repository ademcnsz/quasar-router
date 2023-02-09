<template>
  <q-layout class="flex justify-center flex-col gap-y-4 text-6xl bg-blue-900 items-center">
    <div class="flex gap-4">
    <router-link class="bg-teal-300 m-8 p-4 rounded-md text-white hover:animate-bounce" :to="{ name: 'ProfilePage' }">Go to Profile</router-link>
    <router-link class="bg-teal-300 m-8 p-4 rounded-md text-white hover:animate-bounce" to="/posts">Go to Posts</router-link> 
    </div>
    <q-page-container class="flex">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({

});
</script>
