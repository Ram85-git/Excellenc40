<template>
  <div class="pop14" >
    

          <v-form ref="form" @submit.prevent="login">
            <v-text-field v-model="username" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
            <v-text-field v-model="role" label="role" type="text" outlined></v-text-field>
            <div class="d-flex flex-column">
              <v-btn color="success" type="submit" class="mt-4" block >
                login
              </v-btn>

             
             </div>
             <p>
               <router-link to="/components/SignupForm">Sign UP</router-link>
             </p>

          </v-form>
       
      
    </div>
  
</template>

<script>


import { mapActions, } from 'vuex';

export default {
  name:`LoginForm`,
  data() {
    return {
      showForm: false, 
      username:'',
      email:'',
      role:'',
    };
  },
  methods: {

    ...mapActions(["loginDetails"]),
    login(){

      this.loginDetails({
       
        username: this.username,
        password: this.password,
        role: this.role


      });
    }
      
    },

    

  

};
</script>

<style scoped>
.popup-form {
  /* Styling for the pop-up form */
  /* ... */
}
.v-form{
    width: 600px;
    margin: auto;
    border: 2px solid;
}


</style>
