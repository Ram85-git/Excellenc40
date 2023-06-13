<template>
  <div class="pop14" >
    <!-- Sign-in button -->
    <button  @click="openForm">Sign In</button>

    <!-- Pop-up form -->
    <!-- <div v-if="showForm" class="popup-form"> -->
      <!-- Form content -->
      
        <!-- Form fields and submit button -->
        <!-- ... -->
        <!-- <button @click="closePopupForm"> x</button>
        <v-sheet width="300" class="mx-auto"> -->

          <v-form ref="form" @submit="login">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :counter="10" :rules="emailRules" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
            <div class="d-flex flex-column">
              <v-btn color="success" class="mt-4" block @click="login">
                login
              </v-btn>

              <!-- <v-btn color="error" class="mt-4" block @click="reset">
                Sign Up
              </v-btn> -->
             </div>
             <p>
               <router-link to="/components/SignupForm">Sign UP</router-link>
             </p>

          </v-form>
        <!-- </v-sheet> -->
      
    </div>
  <!-- </div> -->
</template>

<script>
// import axios from 'axios';
import axios from 'axios';

import jwtDecode from 'jwt-decode';
export default {
  name:`LoginForm`,
  data() {
    return {
      showForm: false, // Set initial form visibility to false
      name:'',
      email:'',
      password:'',
    };
  },
  methods: {
    login() {
      console.log('working...');
            const loginData = {
                email: this.email,
                password: this.password
            };
            axios
                .post(`http://65.108.77.50:3031/login?username=${loginData.email}&password=${loginData.password}`)
                .then(response => {
                    const responseData = response.data;
                    // console.log(responseData);
                    if (responseData.error === 0) {
                        const token = responseData.token;
                        const decodedToken = jwtDecode(token);
                        console.log("Login Success", decodedToken);
                        localStorage.setItem("user", JSON.stringify(decodedToken))
                    } else {
                        console.log("login failed")
                    }
                })
                .catch(error => {
                    console.error('Error setting data in API:', error);
                });
        }
    }

  

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
