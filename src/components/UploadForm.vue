<template>
  <div class="dropper">
    <input
      @change="uploadImages($event.target.files)"
      type="file"
      multiple
      accept="images/*"
    >
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages'])
  },
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  width: 40%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px dashed black;
  border-radius: 5px;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>
