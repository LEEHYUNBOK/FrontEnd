<template>
  <div id="exam3c">
    <table>
      <tr v-for="r in size" v-bind:key="r">
        <td>{{ number }} * {{ r }} = {{ number * r }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Exam3Child',
  props: ['number'],
  data() {
    return {
      size: 9,
    }
  },
}
</script>

<style scoped>
div#exam3c {
  width: 30%;
  text-align: left;
  background-color: #ddffdd;
  padding: 0 37%;
}
table {
  border-collapse: collapse;
}
td {
  width: 100px;
  padding: 5px 3px;
  border: 1px solid #b4b0b0;
}
</style>
