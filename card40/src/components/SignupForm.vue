<template>
    <h1>Sign Up</h1>

    <!-- <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        
        <input type="text" v-model="email" placeholder="Enter email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
       <button v-on:click="signUp">Sign Up</button>
    </div> -->
    <v-form ref="form">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :counter="10" :rules="emailRules" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
            <div class="d-flex flex-column">
              <!-- <v-btn color="success" class="mt-4" block @click="signIn">
                login
              </v-btn> -->

              <v-btn color="error" class="mt-4" block @click="signIn">
                Sign Up
              </v-btn>

              
            </div>
            <p>
                <router-link to="/components/LoginForm">Login</router-link>
             </p>
          </v-form>

          
          <!-- <p>
            <router-link to="/components/LoginForm">Login</router-link>
        
          </p> -->
</template>

<script>
import axios from 'axios'
// import { Mounted } from 'vue';

export default {
    name: `SignupForm`,
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    // methods: {
    //   async  signUp(){
    //        let result = await axios.post(`http://65.108.77.50:3031/add_user?username=${result.email}&password=${result.password}` ,{
    //         name: this.name,
    //         email:this.email,
    //         password:this.password
    //        });
    //        this.name='',
    //        this.email='',
    //        this.password=''



    //        console.log(result);
    //        if(result.status==201){
    //         localStorage.setItem(" user-info",JSON.stringify(result.data))
    //         this.$router.push({name:'home'})
    //        }
    //     }
    // },

    // Mounted(){

    //  }
    methods: {
    signIn() {
      const requestData = {
        email: this.email,
        password: this.password
      };
      axios
        .post(`http://65.108.77.50:3031/add_user?username=${requestData.email}&password=${requestData.password}`)
        .then(response => {
          console.log('Data set in API:', response.data);
        })
        .catch(error => {
          console.error('Error setting data in API:', error);
        });
    }
  }




}


</script>
<style scoped>

.v-form{
    width: 600px;
    margin: auto;
    border: 2px solid;
}





</style>