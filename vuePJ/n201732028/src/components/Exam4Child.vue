<template>
  <div id="exam4c">
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
    <button type="button" @click="$emit('send', number)">Ok</button>
  </div>
</template>

<script>
export default {
  name: 'Exam4Child',
  data() {
    return {
      number: 2,
    }
  },
}
</script>

<style scoped>
div#exam4c {
  width: 45%;
  height: 70px;
  background-color: #ddffdd;
  padding: 0 30%;
}
button {
  padding: 0.4em 1em;
  margin: 20px 0;
}
select {
  width: 106px;
  padding: 5px;
  margin: 20px 0;
  float: left;
}
</style>
