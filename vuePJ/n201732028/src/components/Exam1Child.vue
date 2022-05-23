<template>
  <div class="Exam1child">
    <input type="text" v-model="text" />
    <button type="button" @click=";[$emit('send', text), clean()]">Ok</button>
  </div>
</template>

<script>
export default {
  name: 'Exam1View',
  methods: {
    clean() {
      this.text = ''
    },
  },
  data: function () {
    return { text: '' }
  },
}
</script>
<style scoped>
div.Exam1child {
  padding: 30px;
  margin: 20px auto;
  background-color: #ddffdd;
  width: 400px;
}

button {
  margin: 0 30px 0 10px;
}
</style>
