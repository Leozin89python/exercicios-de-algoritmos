<template>
    <div class="page">
      <h1>{{title}}</h1>

      <form type="submit" class="form" action="text">
          <label>name:<label>
          <br>
          <input type="text" v-model="name"/>

           <br>

          <label>job:<label>
          <br>
          <input type="text" v-model="job"/>

          <br>

          <label>country:<label>
          <br>
          <input type="text" v-model="country"/>

          <br>
            <br>
          <input type="submit" value="send" @click="send(event)" >
          <button @click="clear(event)">{{ btnTitle }}</button>

          <hr>
          <textarea class="text">{{database}}</textarea>
      </form >
    </div>
</template>

<script>
export default {
  name: 'page',
  data: () => {
   return {
      title :'Formulary Printer',
      btnTitle :'clear',
      name:'',
      job :'',
      country :'',
      database :[]
   }
 },methods: {
    send() {
        let name = this.name 
        let job = this.job
        let country = this.country

        let  database = this.database 
        database.push([name,job,country])

        this.clearInputs()
        
    },clear() {
        this.name = ''
        this.job = ''
        this.country = ''
        this.database = []
    },clearInputs() {
        this.name = ''
        this.job = ''
        this.country = ''
    },
 }, mounted(){
             document.onclick = addEventListener('click',(e) =>{
                 e.preventDefault()
             }) 
        }
}
</script>

<style>
     .page{
      grid-area: page;

         width:100%; 

    }
    .form{
      display:flex;
      justify-content:center;
    }
    textarea{
      height:150px;
      width:300px;
    }
</style>
