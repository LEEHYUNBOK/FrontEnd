<template>
  <div id="box">
    <h1>제품 제목</h1>
    <table>
      <tr>
        <td class="firstPrint"></td>
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
        <td>
          <input type="checkbox" v-model="book.checked" v-on:click.stop />
        </td>
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
      </tr>
    </table>
    <div>합계 : {{ sum }}</div>
    <br />
    <button type="button" v-on:click="add">등록</button>
    <button type="button" v-on:click="reload">새로고침</button>
    <button type="button" v-on:click="deleteTodo">삭제</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Exam1List',
  data() {
    return {
      bookList: [],
      todo: {},
      sum: 0,
    }
  },
  mounted() {
    this.reload()
  },
  computed: {
    checkedCount() {
      let count = 0
      for (let i = 0; i < this.bookList.length; ++i)
        if (this.bookList[i].checked) ++count
      return count
    },
  },
  methods: {
    edit(id) {
      this.$router.push({ name: 'book', params: { id: id } })
    },
    add() {
      this.$router.push('book')
    },

    deleteTodo() {
      if (confirm('삭제하시겠습니까?')) {
        let idlist = []
        for (let i = 0; i < this.bookList.length; ++i)
          if (this.bookList[i].checked) idlist.push(this.bookList[i].id)
        axios
          .delete(
            'http://localhost:8088/server/book/delete?idlist=' +
              idlist.join(',')
          )
          .then(() => this.reload())
          .catch((error) => this.onError(error))
      }
    },
    reload() {
      axios
        .get('http://localhost:8088/server/book/list')
        .then((response) => {
          this.bookList = response.data
          this.sum = 0
          for (let i = 0; i < response.data.length; i++) {
            this.sum += response.data[i].price
          }
        })
        .catch((error) => this.onError(error))
    },
    onError: function (error) {
      console.log(error)
      alert(error.message)
    },
  },
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
td.checkbox {
  width: 50px;
}
td.firstPrint {
  width: 9%;
}
td.anotherPrint {
  width: 27%;
}
</style>
