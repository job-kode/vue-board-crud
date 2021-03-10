<template>
  <div class="container">
    <h1>게시판 수정</h1>
    <hr />
    <form @submit.prevent="handleSubmit">
      id : <input v-model="post.id" type="text" /><br />
      제목 : <input v-model="post.title" type="text" /><br />
      작성자 : <input v-model="post.writer" type="text" /><br />
      날짜 : <input v-model="post.created" type="text" /><br />
      내용 : <input v-model="post.content" type="text" /><br />
      <button>수정</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: {},
    }
  },
  created() {
    const id = this.$route.params.id
    axios
      .get(`/board/${id}`)
      .then(res => {
        this.post = {
          id: res.data.id,
          writer: res.data.writer,
          title: res.data.title,
          content: res.data.content,
          created: res.data.created,
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    handleSubmit() {
      const id = this.$route.params.id
      axios
        .put(`/board/${id}`, this.post)
        .then(res => {
          console.log(res.data)
          this.$router.push({name: 'BoardList'})
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped lang="scss"></style>
