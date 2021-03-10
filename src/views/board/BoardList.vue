<template>
  <div class="container">
    <h1>게시판 리스트</h1>
    <div class="writeBtn">
      <router-link :to="{name: 'BoardWrite'}" exact>
        <button>글쓰기</button>
      </router-link>
    </div>
    <table>
      <tr>
        <th>번호</th>
        <th>작성자</th>
        <th>제목</th>
        <th>날짜</th>
        <th>관리</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.writer }}</td>
        <td>
          <router-link :to="{name: 'BoardDetail', params: {id: post.id}}" exact>
            {{ post.title }}
          </router-link>
        </td>
        <td>{{ post.created }}</td>
        <td>
          <router-link :to="{name: 'BoardUpdate', params:{id:post.id}}">
            <button>수정</button>
          </router-link>
          <button @click="boardDelete(post.id)">삭제</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    axios
      .get('/board')
      .then(res => {
        console.log(res.data)
        this.posts = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    boardDelete(id) {
      const index = this.posts.indexOf(id)
      console.log(index)
      axios
        .delete(`/board/${id}`)
        .then(() => {
          this.posts.splice(index, 1)
          console.log(this.posts)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped lang="scss">
.writeBtn {
  text-align: right;
}
table {
  width: 100%;
  tr {
    th {
      background: #eee;
    }
  }
}
</style>
