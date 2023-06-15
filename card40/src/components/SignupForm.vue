<template>
  <div class="imgback">
    <h1>Sign Up</h1>

    
    <v-form  @submit.prevent="signIn" ref="form">
      <v-text-field v-model="username" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      
      <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
      <v-text-field v-model="role" label="role" type="text" outlined></v-text-field>
      <div class="d-flex flex-column">
        

        <v-btn color="error" type="submit" class="mt-4" >
          Sign Up
        </v-btn>


      </div>
      <p>
        <router-link to="/components/LoginForm">Login</router-link>
      </p>
    </v-form>

  </div>
  
</template>

<script>

import { mapActions, } from 'vuex';


export default {
  name: `SignupForm`,
  data() {
    return {
      username: '',
      password: '',
      role: ''
    }
  },
  
  methods: {

    ...mapActions(["adduser1"]),
    signIn() {
      this.adduser1({
        username: this.username,
        password: this.password,
        role: this.role
        
      })
      console.log("singn in" , this.username);

    }

  },

  
}

</script>
<style scoped>
.v-form {
  width: 600px;
  margin: auto;
  border: 2px solid;
}

.imgback {
  /* display: flex; */
  /* flex-direction: column; */
  background-image: url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzY3RleHR1cmUwMS1iZWVyLTAwMF81LmpwZw.jpg?s=HsmcUASyIhByOR7WVG7d5Bb0Sbc2LRpOGn1Wlh8gxgA');
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 1400px;
  max-width: 1400px;
  margin: auto;
  text-align: center;


}
</style>