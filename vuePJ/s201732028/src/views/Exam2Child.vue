<template>
  <div id="box2">
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
      <button type="button" @click=";[$emit('send', book), (book = {})]">
        저장
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exam2Child',
  data() {
    return {
      book: {},
    }
  },
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid gray;
}
div#box2 {
  padding: 5%;
  background-color: lightyellow;
}
input {
  padding: 6px;
  font-size: 12pt;
  width: 80%;
  margin-bottom: 10px;
}
button {
  padding: 0.3em 1.3em;
  margin-left: 5px;
  font-size: 11pt;
  margin-top: 10px;
}
</style>
