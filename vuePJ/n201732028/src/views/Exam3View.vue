<template>
  <div class="Exam3">
    <h1>Exam3</h1>
    <select v-model="number">
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
    <Exam3Child v-bind:number="number" />
  </div>
</template>

<script>
// @ is an Exam1Child to /src
import Exam3Child from '@/components/Exam3Child.vue'

export default {
  name: 'Exam3View',
  data: function () {
    return { number: 2 }
  },
  components: {
    Exam3Child,
  },
}
</script>
<style scoped>
div.Exam3 {
  padding: 30px;
  text-align: center;
  margin: 30px auto;
  width: 400px;
}
table {
  margin: 0 40%;
  border-collapse: collapse;
}
td {
  width: 100px;
  padding: 2px;
  border: 1px solid #b4b0b0;
}
select {
  width: 106px;
  padding: 5px;
  margin: 10px 0;
}
</style>
