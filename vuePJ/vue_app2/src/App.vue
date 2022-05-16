<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <MyCheckbox3 />
    <MyButton1 />
    <MySelect3 />
    <TestWorld1 />
  </div>
</template>

<script>
import MyCheckbox3 from './components/MyCheckbox3.vue'
import MyButton1 from './components/MyButton1.vue'
import MySelect3 from './components/MySelect3.vue'

import TestWorld1 from './components/TestWorld1.vue'

export default {
  name: 'App',
  components: {
    MyCheckbox3,
    MyButton1,
    MySelect3,
    TestWorld1,
  },
}
</script>

<style scoped>
div {
  vertical-align: top;
  margin: 10px;
}
img {
  margin: 10px;
}
</style>
