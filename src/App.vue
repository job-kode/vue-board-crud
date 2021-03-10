<template>
  <div id="app">
    <nav>
      <div class="title">
        <router-link to="/" exact>게시판CRUD</router-link>
      </div>
      <ul class="menu">
        <li><router-link to="/" exact>Home</router-link></li>
        <li>
          <router-link :to="{name: 'BoardList'}" exact>게시판</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.container {
  width: 90%;
  text-align: center;
  margin: 0 auto;
}

nav {
  background: #eee;
  margin-bottom: 20px;
  .title {
    display: inline-block;
    text-align: center;
    width: 200px;
  }
  .menu {
    display: inline-block;
    li {
      display: inline-block;
      padding: 0.3em;
      margin-right: 1em;
    }
  }
}
</style>
