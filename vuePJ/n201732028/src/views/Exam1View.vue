<template>
  <div class="Exam1">
    <h1>Exam1</h1>
    <table>
      <tr v-for="r in counter.length" v-bind:key="r">
        <td>{{ counter[r - 1] }}</td>
      </tr>
    </table>
    <Exam1Child v-on:send="add" />
  </div>
</template>

<script>
// @ is an Exam1Child to /src
import Exam1Child from '@/components/Exam1Child.vue'

export default {
  name: 'Exam1View',
  data: function () {
    return { counter: ['one', 'two'] }
  },
  methods: {
    add(value) {
      this.counter.push(value)
    },
  },
  components: {
    Exam1Child,
  },
}
</script>
<style scoped>
div.Exam1 {
  padding: 30px;
  margin: 30px auto;
  width: 400px;
}
table {
  width: 40%;
  text-align: left;
  margin: 0 30%;
  border-collapse: collapse;
}
td {
  width: 200px;
  padding: 2px;
  border: 1px solid #b4b0b0;
}
select {
  width: 106px;
  padding: 5px;
  margin: 10px 0;
}
</style>
