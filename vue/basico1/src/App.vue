<template>
  <div id="app">
    <headerPage />
    <page />
    <footPage />
  </div>
</template>

<script>

import page from './components/page/page.vue'
import headerPage from './components/header/header.vue'
import footPage from './components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    headerPage,
    page,
    footPage
  }
}
</script>

<style>
body,html{
    margin:0px;

    overflow:hidden;
}
#app {

    margin:0px;

    display: grid;
		grid-template-rows: 100px 480px 100px;
		grid-template-columns: 100%;
		grid-template-areas:
			"headerPage headerPage"
			"page             page"
			"footPage     footPage";

}
</style>
