<template>
  <div class="foot">
      <p>&reg;{{ title }}<p>
  </div>
</template>

<script>
  export default {
    name :'foot',
    data :() => {
      return {
          title :'2021 Vue program and all resources have all rights reserved.'
      }
    },methods(){

    }
  }
</script>

<style>
    .foot{
      grid-area:  footPage;

       width:100%; 

       background-color:black;
       color:white;

       display:flex;
       justify-content:flex-end;
    }
    p{
      font-size:xx-small;
      margin-top:3em;
      margin-right:1em;
    }
</style>
