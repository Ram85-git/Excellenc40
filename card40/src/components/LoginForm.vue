<template>
    <div class="form-popup">
      <form @submit.prevent="submitForm">
        <input type="text" v-model="formData.name" placeholder="Name" required>
        <input type="email" v-model="formData.email" placeholder="Email" required>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:`LoginForm`,
    data() {
      return {
        formData: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        // You can access form data using this.formData
        // Example: send data to API, perform validation, etc.
        // After submission, you can close the pop-up form
        this.closeForm();
      },
      closeForm() {
        // Emit an event to the parent component to indicate that the form should be closed
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for the form-popup component */
  </style>
  