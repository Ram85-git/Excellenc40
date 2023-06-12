<template>
  
  <!-- <div class="main">
   <h1> Poll Management System </h1>
  </div> -->
  <div class="main">
   <div class="mainback">
    <div class="mainback1">
      <h1>Poll Management System</h1>
      <h3>Press here for Register</h3>
      <div class="text-center">
       <v-btn
          :loading="loading"
          @click="loading = !loading"
        >
        Sign Up

        <template v-slot:loader>
        <v-progress-linear indeterminate></v-progress-linear>
        </template>
        </v-btn>
      </div>
      <h3>Press here for Login </h3>
      <div class="text-center">
       <v-btn
          :loading="loading"
          @click="loading = !loading"
        >
        log In

        <template v-slot:loader>
        <v-progress-linear indeterminate></v-progress-linear>
        </template>
        </v-btn>
      </div>
    </div>   
 </div>
  
</div>


</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>
.main{
  display: flex;
  
}
/* .main .mainback{
  flex-direction: row;
} */

.mainback{
  display: flex;
  /* flex-direction: column; */
  background-image: url('https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=360');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 1400px;
}
.mainback1{
  /* border: 1px solid; */
  height: 500px;
  margin: auto;
  padding-top: 100px;
  
  
}
.mainback1 h1{
  padding: 20px;
}
.mainback1 h3{
  padding: 20px;
}



</style>
