<template>
  <div class="Exam4">
    <h1>Exam4</h1>
    <table>
      <tr v-for="r in size" v-bind:key="r">
        <td>{{ number }} * {{ r }} = {{ number * r }}</td>
      </tr>
    </table>
    <Exam4Child v-on:send="change" />
  </div>
</template>

<script>
// @ is an Exam1Child to /src
import Exam4Child from '@/components/Exam4Child.vue'

export default {
  name: 'Exam4View',
  data: function () {
    return { number: 2, size: 9 }
  },
  methods: {
    change(value) {
      this.number = value
    },
  },
  components: {
    Exam4Child,
  },
}
</script>
<style scoped>
div.Exam4 {
  padding: 30px;
  margin: 30px auto;
  width: 400px;
}
table {
  width: 106px;
  text-align: left;
  margin: 0 40%;
  border-collapse: collapse;
}
td {
  width: 100px;
  padding: 5px 3px;
  border: 1px solid #b4b0b0;
}
</style>
