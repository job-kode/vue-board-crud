import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BoardList from '@/views/board/BoardList.vue'
import BoardDetail from '@/views/board/BoardDetail.vue'
import BoardWrite from '@/views/board/BoardWrite.vue'
import BoardUpdate from '@/views/board/BoardUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/board', name: 'BoardList', component: BoardList},
  {path: '/board/write', name: 'BoardWrite', component: BoardWrite},
  {path: '/board/:id', name: 'BoardDetail', component: BoardDetail},
  {path: '/board/:id/update', name: 'BoardUpdate', component: BoardUpdate},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
