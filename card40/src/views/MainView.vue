<template>
    <h1> Poll Management System</h1>

    <!-- <button @click="openPopupForm">Open Form</button> -->
    <div class="main">
        <div>

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
                            <!-- <li>{{ dialogTitle }}</li>
                           <li>{{dialogSelect  }}</li> -->

                        </v-form>
                    </v-card-text>
                    <v-card-actions>

                        <v-btn color="blue" text @click="addPollFromDialog">Add New Poll</v-btn>
                        <!-- <v-btn color="blue" text @click="EditPoll">Edit Poll</v-btn> -->
                        <!-- <v-btn color="blue" text @click="DeletePoll">Delete Poll</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <table v-if="showTable">
                <tr>
                    <th id="heading" v-for="heading in tableData" :key="heading">{{ heading }}</th>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                <tr v-for="(item,) in tableData" :key="item">
                    <td>{{ item.dialogTitle }}</td>
                    <td>{{ item.dialogSelect }}</td>
                    <!-- <td>{{ item.message }}</td> -->
                </tr>
            </table>




        </div>
    </div>

    <PollCards />
</template>

<script>
import { mapActions } from 'vuex';
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
            dialogVisible: false,

            dialogTitle: '',

            dialogSelect: null,
            tableData: []



        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        cancelDialog() {
            this.dialogVisible = false;
        },

        ...mapActions(['addPoll']),
        addPollFromDialog() {
            this.addPoll({
                title: this.dialogTitle,
                select: this.dialogSelect
            })
            const newRow = {
                // const newRow = {
                title: this.dialogTitle,
                option: this.dialogSelect
            };
            this.tableData.push(newRow);

            // Reset the input fields
            this.dialogTitle = '';
            this.dialogSelect = null;

            // Close the dialog
            this.dialogVisible = false;


        }
    },


};
</script>
<style scoped>
table {
    display: contents;
    border: 1px solid;
    height: 250px;
    width: 250px;
}

table tr {
    /* border: 1px solid green; */
    height: 80px;
    width: 40px;
    margin-top: 10px;
    color: #364140;
}

table tr th {
    /* border: 1px solid brown; */
    /* border-radius: 16px; */
    height: 20px;
    width: 350px;
    text-align: center;
    color: #364140;
    /* background-color: rgba(54, 65, 64, 0.04); */
    font-weight: 700;
    border-radius: 30px;

}

table tr td {
    /* border: 1px solid brown; */
    height: 20px;
    /* background-color: rgba(54, 65, 64, 0.04); */
    width: 300px;
    text-align: center;
    color: #364140;
    font-weight: 700;
    border-radius: 30px;
    /* margin-top: 20px; */
    /* padding-top: 20px; */
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

}</style>