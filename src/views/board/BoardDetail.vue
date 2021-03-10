<template>
  <div class="container">
    <h1>게시판 상세</h1>
    <router-link :to="{name: 'BoardList'}">
      <button>목록</button>
    </router-link>
    <router-link :to="{name: 'BoardUpdate', params: {id: post.id}}">
      <button>수정</button>
    </router-link>
    <button @click="boardDelete">삭제</button>
    <hr />
    제목 : {{ post.title }} <br />
    작성자 : {{ post.writer }} <br />
    날짜 : {{ post.created }} <br />
    내용 : {{ post.content }} <br />
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
        console.log(res.data)
        this.post = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    boardDelete() {
      const id = this.$route.params.id
      axios
        .delete(`/board/${id}`)
        .then(() => {
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
