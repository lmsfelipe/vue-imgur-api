<template>
  <div v-if="isLoggedIn" class="image-container">
    <img :src="image.link" :key="image.id" v-for="image in allImages" />
  </div>
  <h2 v-else>Please log in to get started</h2>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: {
    ...mapActions(['fetchImages'])
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
