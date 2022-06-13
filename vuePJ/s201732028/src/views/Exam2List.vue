<template>
  <div id="box">
    <h1>제품 제목</h1>
    <table>
      <tr>
        <td class="firstPrint">id</td>
        <td class="anotherPrint">제목</td>
        <td class="anotherPrint">저자</td>
        <td class="anotherPrint">가격</td>
      </tr>
      <tr
        v-for="book in bookList"
        v-bind:key="book.id"
        v-on:click="edit(book.id)"
      >
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
      </tr>
    </table>
    <Exam2Child v-on:send="save" />
  </div>
</template>

<script>
import axios from 'axios'
import Exam2Child from './Exam2Child.vue'

export default {
  name: 'Exam2List',
  data() {
    return {
      bookList: [],
    }
  },
  mounted() {
    this.reload()
  },
  methods: {
    save(sendBook) {
      axios
        .post('http://localhost:8088/server/book/add', sendBook)
        .then(() => this.reload())
        .catch((error) => this.onError(error))
    },
    reload() {
      axios
        .get('http://localhost:8088/server/book/list')
        .then((response) => (this.bookList = response.data))
        .catch((error) => this.onError(error))
    },
    onError: function (error) {
      console.log(error)
      alert(error.message)
    },
  },
  components: { Exam2Child },
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid gray;
}
div#box {
  text-align: left;
  padding: 30px;
  margin: 30px auto;
  width: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
input[type='text'],
input[type='date'] {
  height: 2.4em;
  padding: 4px;
  margin-right: 5px;
}
button {
  padding: 0.4em 1.5em;
  margin-right: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
tr:nth-child(1) {
  background-color: #ddd;
}
td {
  padding: 5px;
  border: 1px solid #aaa;
}
td.firstPrint {
  width: 9%;
}
td.anotherPrint {
  width: 27%;
}
</style>
