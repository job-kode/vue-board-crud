<template>
  <div class="container">
    <h1>게시판 글쓰기</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="writer">작성자</label>
        <input v-model="writer" type="text" id="writer" />
      </div>
      <div>
        <label for="title">제목</label>
        <input v-model="title" type="text" id="title" />
      </div>
      <button>완료</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      writer: '',
      title: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        writer: this.writer,
        title: this.title,
      }
      axios
        .post('/board', data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.push({name: 'BoardList'})
    },
  },
}
</script>

<style scoped lang="scss"></style>
