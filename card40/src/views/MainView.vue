<template>
    <h1> Poll Management System</h1>

    <!-- <button @click="openPopupForm">Open Form</button> -->
    <div class="main">


        <div class="fffff">
            <br>
            <v-btn color="blue" class="btbt" type="button" @click="openDialog">
                Add Poll
            </v-btn>

        </div>
        <v-dialog v-model="dialogVisible" class="dig">
            <v-card class="card">
                <v-card-title>
                    <span class="headline">Add New Poll</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="formDialog">
                        <v-text-field v-model="dialogTitle" label="Title" required></v-text-field>
                        <v-select v-model="dialogSelect" :items="items" label="Option" required></v-select>
                        <v-text-field v-model="dialogSelect"  label="Add option" hide-details="auto"></v-text-field>
                       

                    </v-form>
                </v-card-text>
                <v-card-actions>

                    <v-btn type="button" color="blue" text v-on:click.prevent="addPollFromDialog();
                    submit();">Add New Poll</v-btn>
                  
                </v-card-actions>
            </v-card>
        </v-dialog>
        
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Title
                    </th>
                    <th class="text-left">
                        Option
                    </th>
                    <th class="text-left">
                        Delete
                    </th>
                    <th class="text-left">
                        Update
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item" id="item">
                    <td>{{ item.title }}</td>
                    <td>{{ item.select }}</td>
                    <!-- <td><i class="fa-solid fa-trash" v-on:click.prevent="deleteItem()"></i></td>
                    <td><i class="fa-regular fa-pen-to-square" v-on:click.prevent="editItem()"></i></td> -->

                </tr>
            </tbody>
        </v-table>

    </div>

    <PollCards />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import { mapState } from 'vuex';
import PollCards from '@/components/PollCards.vue';
// import axios from 'axios';  
export default {
    name: "MainView",
    components: {
        PollCards

    },

    data() {
        return {
            title: "",
            select: "",
            items: [
                'val 1',
                'val 2',
                'val 3',
                'val 4',
                'val 5',
                'val 6',
            ],
            dialogVisible: false,

            dialogTitle: "",
            dialogSelect: null,
            tableData: [],



        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        cancelDialog() {
            this.dialogVisible = false;
        },

        // ...mapActions(['addPoll', 'deletePoll', 'editPoll', 'fetchData']),
        ...mapActions(['addPoll', 'fetchData' ]),
       
        addPollFromDialog() {
            this.$router.push('/mainview');
            this.$router.push('/pollview')
            this.addPoll({
                title: this.dialogTitle,
                select: this.dialogSelect
            })
            this.dialogVisible = false;
        },
       


        submit: function () {
            console.log("Value added", this.dialogTitle, this.dialogSelect);
            this.tableData.push({
                'title': this.dialogTitle,
                'select': this.dialogSelect

            })
            this.dialogTitle = '';
            this.dialogSelect = '';
        }
       
    },
    computed: mapGetters(["allPolls"]),




};
</script>
<style scoped>
.dig{
    margin: auto;
    text-align: center;
}
.v-table {
    border: 2px solid;
    width: 400px;
    margin: auto;

}

th,
td {
    padding: 20px;
    border: 1px solid yellow;
    padding-left: 20px;
    color: black;
}

.main {
    /* background-color: rgb(173, 230, 173); */
    background-image: url('https://s3-alpha.figma.com/hub/file/2212208180/d665c7ae-bce3-43c3-8b19-9ca5ebfe4783-cover.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    max-width: 1400px;
    /* width: 1200px; */
    /* width: 1200px; */
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

.v-form {
    border: 1px solid;
    border: 2px solid;
    height: 300px;
    width: 500px;
}

.card {
    border: 1px solid;
    width: 600px;
}

.btbt {

    margin-left: 912px;
}

.btbtt {
    margin-right: 12px;

}
</style>