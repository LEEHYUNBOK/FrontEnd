<template>
  <div class="Exam1">
    <h1>Exam1</h1>
    <table>
      <tr v-for="r in counter.length" v-bind:key="r" @click="add(r - 1)">
        <td>{{ counter[r - 1] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Exam2View',
  data: function () {
    return { counter: ['one', 'two', 'three', 'four', 'five', 'six'] }
  },
  methods: {
    add(value) {
      this.counter.splice(value, 1)
    },
  },
}
</script>
<style scoped>
div.Exam1 {
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
td:hover {
  background-color: lightyellow;
}
select {
  width: 106px;
  padding: 5px;
  margin: 10px 0;
}
</style>
