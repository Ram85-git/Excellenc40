<template>
  <div class="pop14">


    <v-form ref="form">
      <v-text-field v-model="username" label="Username" required ></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
      <!-- <v-text-field v-model="role" label="role" type="text" outlined></v-text-field> -->
      <div class="d-flex flex-column">
        <v-btn color="success" @click="login" class="mt-4">
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


import router from '@/router';
import { mapActions , mapGetters } from 'vuex';
// import router from '../router/index'

export default {
  name: `LoginForm`,
  data() {
    return {
      showForm: false,
      username: "",
      password: "",
      // user:''
      // role:'',
      // admin:''
    };
  },
  computed: mapGetters(["allUsers"]),
  methods: {
    ...mapActions(["loginDetails"]),

    login() {


      this.loginDetails({
        username: this.username,
        password: this.password,

      })

      for (let index = 0; index < this.allUsers.data.length ; index++) {
        // console.log(this.allUsers.data[index].password);
        // const element = this.getAllUsers.data[index];
        // console.log(this.username, this.password , "hello");
        if (this.allUsers.data[index].username == this.username && this.allUsers.data[index].password == this.password) {
          let role = this.allUsers.data[index].role;
          console.log("role.....", this.allUsers.data[index].role);
          console.log(role);
          if (role == "admin") {
            router.push({ path: '/pollview', });
          }
          if (role == "user") {
            router.push({ path: '/components/User' });
          }
        }
      }

    }
  },
};
</script>

<style scoped>
.popup-form {
  /* Styling for the pop-up form */
  /* ... */
}

.v-form {
  width: 600px;
  margin: auto;
  border: 2px solid;
}

.pop14 {
  background-image: url('https://images.unsplash.com/photo-1639493115941-b269818abfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1400px;
  margin: auto;
  height: 800px;
}
</style>
