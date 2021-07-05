<template>
  <div class="head">
    <h1>{{ name }}&copy;</h1>
  </div>
</template>

<script>
  export default{
     name: 'head',
     data: () => {
         return {
            name :'Vue Program basic studies'
         }
     },methods(){

     }
  }
</script>

<style>
    .head{
      grid-area: headerPage;
      
       width:100%; 
      
      background-color:red;

      text-align:center;
      color:white;
      font-size:4vh;
    }
    
</style>

