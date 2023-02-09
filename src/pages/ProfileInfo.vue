<template>
  <q-page class="flex flex-col items-center mt-10 w-full">
    <h5 class="font-bold text-white text-2xl">Profil Bilgi Sayfası</h5>
    <p class="text-white text-2xl">Profil ID: {{ this.$route.params.id }}</p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      myProp: "",
    };
  },
  created() {
    this.myProp = this.$route.params.id;
  },
});
</script>
