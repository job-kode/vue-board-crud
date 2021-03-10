<template>
  <div class="container">
    <h1>게시판 폼</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="writer">작성자</label>
        <input v-model="writer" type="text" id="writer" />
      </div>
      <div>
        <label for="title">제목</label>
        <input v-model="title" type="text" id="title" />
      </div>
      <div>
        <label for="content">내용</label>
        <textarea v-model="content" type="text" id="content"></textarea>
      </div>
      <div>
        <label for="created">날짜</label>
        <input v-model="created" type="text" id="created" />
      </div>
      <button>글쓰기</button>
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
        content: this.content,
        created: this.created,
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
