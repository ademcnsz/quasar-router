<template>
  <q-page>
    <h4 class="text-6xl text-white m-6 p-4 rounded-md">Profile Page</h4>
    <div class="flex mx-24 justify-center mb-4 items-center bg-orange-300 rounded-md p-1" v-for="profile in profiles" :key="profile.id">
      <router-link  class="text-white text-2xl" :to="{ path: `/profile/${profile.id}`}" replace>{{profile.name}}
      </router-link>
    </div>
    <router-view ></router-view>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      profiles: [
        { id: 1, name: "Mehmet" },
        { id: 2, name: "Ahmet" },
        { id: 3, name: "Hasan" },
      ],
    };
  },
});
</script>
