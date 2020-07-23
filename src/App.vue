<template>
  <div id="app">
    <Sidebar :items="listMenu"/>
    <main>
      <Title :text="title"/>
      <router-view></router-view>
  </main>
  </div>
</template>

<script>

import Title from './components/Title.vue';
import Sidebar from './components/menu/Sidebar.vue';
import { Bus } from './bus';

export default {
  name: 'App',
  data: function() {
    return {
      title: 'Page 1',
      listMenu: [{ id: 1, text: 'Page 1', icon: 'logo-ionic'}, { id: 2, text: 'Page 2', icon: 'leaf'}]
    }
  },
  components: {
    Title,
    Sidebar
  },
  created (){
    Bus.$on('loadPage', (newTitle) => {
      this.title = newTitle;
    })
  }
}
</script>

<style>
  body {
    background-color: #E5E5E5;
    font-family: 'Open Sans', sans-serif;
  }
  main {
    position: relative;
    height: 100vh;
  }
</style>
