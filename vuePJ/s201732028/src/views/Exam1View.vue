<template>
  <div id="box">
    <h1>책 {{ book.id ? '수정' : '등록' }}</h1>
    <input
      type="text"
      v-model.trim="book.title"
      placeholder="제목을 입력하세요"
    /><br />
    <input
      type="text"
      v-model.trim="book.author"
      placeholder="저자을 입력하세요"
    /><br />
    <input
      type="text"
      v-model.trim="book.price"
      placeholder="가격을 입력하세요"
    /><br />
    <div>
      <button type="button" @click="save">저장</button>
      <button type="button" @click="cancel">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Exam1View',
  data() {
    return {
      book: {},
    }
  },
  mounted() {
    if (this.$route.params.id) {
      axios
        .get('http://localhost:8088/server/book/' + this.$route.params.id)
        .then((response) => (this.book = response.data))
        .catch((error) => this.onError(error))
    } else this.book = {}
  },
  methods: {
    save() {
      if (this.book.id)
        axios
          .put('http://localhost:8088/server/book/update', this.book)
          .then(() => this.$router.push('exam1'))
          .catch((error) => this.onError(error))
      else
        axios
          .post('http://localhost:8088/server/book/add', this.book)
          .then(() => this.$router.push('exam1'))
          .catch((error) => this.onError(error))
    },
    cancel() {
      this.$router.push('exam1')
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
  padding: 30px;
  margin: 30px auto;
  width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
  text-align: left;
}
input {
  padding: 6px;
  font-size: 12pt;
  width: 90%;
  margin-bottom: 10px;
}
button {
  padding: 0.3em 1.3em;
  margin-left: 5px;
  font-size: 11pt;
  margin-top: 10px;
}
</style>
