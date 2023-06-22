<template>
  
  
  <div class="main">
   <div class="mainback">
    <div class="mainback1">
      <h1>Poll Management System</h1>
      <!-- <h3>Press here for Register</h3> -->
      <div class="text-center">
      
      </div>
      
    </div>   
 </div>
  
</div>

<loginForm/>
</template>

<script>

// import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'HomeView',
  components: {
    // LoginForm
    
  },

  // mounted(){
  //   let user = localStorage.getItem('user-info');
  //   if(!user){
  //     this.$router.push({name:'SignUp'})
  //   }
  // }


  

}
</script>
<style scoped>
.main{
  display: flex;
  
}


.mainback{
  display: flex;
  /* flex-direction: column; */
  background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-two-color-gradient-universal-background-material-color-matching-backgroundtwo-tone-image_51848.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 1400px;
  max-width: 1400px;
  margin: auto;
  text-align: center;
}
.mainback1{
  /* border: 2px dotted green; */
  height: 500px;
  margin: auto;
  margin-top: 10px;
  
  
}
.mainback1 h1{
  padding: 20px;
}
.mainback1 h3{
  padding: 20px;
}



</style>
