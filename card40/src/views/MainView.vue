<template>
       <h1> Poll Management System</h1>
       <div class="main">
        <div>
            <h3>Main View Component</h3>
            <div class="fffff">
                <v-sheet width="300">
                    <v-form ref="form" @submit.prevent="addpoll">
                        <v-text-field v-model="title" label="Title" required></v-text-field>
                        <v-select v-model="select" :items="items" label="Option" required></v-select>
                        <v-btn color="blue" type="submit" class="mt-4" block >
                            Submit
                        </v-btn>
                    </v-form>
                </v-sheet>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
// import axios from 'axios';  
export default {
    name: "MainView",
    data() {
        return {
            title: '',
            select: '',
            items: [
                'val 1',
                'val 2',
                'val 3',
                'val 4',
                'val 5',
                'val 6',
            ],
        };
    },
    methods: {

        ...mapActions(["fetchUsers"]),
        addpoll() {
            this.fetchUsers({
                title: this.title,
                select: this.select
            })
            console.log(this.title, this.select)
        }
    }
};
</script>
<style scoped>
.main {
    background-color: rgb(173, 230, 173);
    height: 500px;
    width: 100%;
    margin: auto;
    text-align: center;
}
.main h3 {
    position: relative;
    top: 20px;
    font-size: 20px;
    color: white;
    border: 2px solid lightcyan;
    width: 300px;
    margin: auto;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 40px;
}
button {
    background: black;
    color: white;
}
.v-form{
    border: 1px solid;
}
</style>