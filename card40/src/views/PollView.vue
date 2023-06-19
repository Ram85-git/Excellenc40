<template>
    <div class="mainPoll">
        <h1>All Polls</h1>

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
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="option in tableData" :key="option._id">
                    <td>{{ option.title }}</td>
                    <!-- <td>{{ option.select }}</td> -->
                    <td>
                        <div v-for="(item, index) in option.options" :key="index">
                            {{ item.option }}
                        </div>
                    </td>
                    <td><i class="fa-solid fa-trash" v-on:click.prevent="deleteusers(option._id)"></i></td>
                    <td><i class="fa-regular fa-pen-to-square" v-on:click.prevent="editItem(option._id, option.title)"></i></td>
                    
                </tr>
            </tbody>
        </v-table>
        <v-dialog v-model="dialogVisible" class="dig">
            <v-card class="card">
                <v-card-title>
                    <span class="headline">Edit Poll</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="formDialog">
                        <v-text-field v-model="title" label="Title" required></v-text-field>
                        <v-text-field v-model="option" label="Add option" hide-details="auto"></v-text-field>
                        <!-- <v-select v-model="dialogSelect" :items="items" label="Option" required></v-select> -->
                        <!-- <li>{{ dialogTitle }}</li>
                           <li>{{dialogSelect  }}</li> -->


                    </v-form>
                </v-card-text>
                <v-card-actions>

                    <v-btn type="button"  label="Title"  color="blue" text v-on:click.prevent="submit(); ">Submit</v-btn>
                    <v-btn type="button"  label="Option"  color="blue" text v-on:click.prevent="addDeta(option);">Add Option</v-btn>
                    <!-- <v-btn color="blue" text @click="EditPoll">Edit Poll</v-btn> -->
                    <!-- <v-btn color="blue" text @click="DeletePoll">Delete Poll</v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- <div>
            <button @click="showForm = true">Edit</button>
        </div>
        <div class="popform" v-if="showForm">
            <v-form ref="formDialog">
                <v-text-field v-model="dialogTitle" label="Title" required></v-text-field>
                <v-select v-model="dialogSelect" :items="items" label="Option" required></v-select>

            </v-form>
            <button @click="saveForm">Save</button>
            <button @click="cancelForm">Cancel</button>
        </div> -->


    </div>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: 'Po-ll',
    data() {
        return {
            title: '',
            options: [],
            tableData: [],
            showForm: false,
            dialogVisible: false,
            submittedTitle: '',
            id1:"",
            // text: '',
            id2: '',
            option: '',
           
           

        };
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        editItem(id,id4,title,option) {
            this.id1=id;
           this.id2=id4;
            this.title=title;
            this.option=option;
            // this.text=text;
            this.dialogVisible = true;
        },
        // ...mapActions(['deleteusers', 'editusers', 'editPoll' ]),
        ...mapActions(['deleteusers',  'editPoll', 'addNewOption' ]),
        
        async fetchData() {
            try {
                const response = await axios.get('http://65.108.77.50:3031/list_polls');
                console.log('42 called ', response, response.data);
                this.tableData = response.data.data
                // this.title = response.data.title;
                // this.options = response.data.options;
            } catch (error) {
                console.error(error);
            }
        },
        // saveForm() {

            //     this.showForm = false;
            // },
            // cancelForm() {
                
                //     this.showForm = false;
        // },
        submit() {
            let editid={
                id:this.id1,
                title:this.title,
               
            }   
            this.editPoll(editid);

            // this.title = this.submittedTitle;
            this.dialogVisible = false;
            
        },
        addDeta() {
            console.log(this.option);
            let optionid ={
                id4:this.id2,
                option:this.option,
               
            }
            this.addNewOption(null, optionid);
            

        },
        
        deletePoll(pollid) {
            // console.log(pollid)
            this.deleteusers(pollid);
        },
    }
};
</script>

<style scoped>

.mainPoll{
    background-image: url('https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/62ee03241cef28eaca144d50_Rectangle%201%20(40).svg');
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 1400px;
    margin: auto;
    height: 800px;
}
.dig {
    width: 500px;
}

.v-table {
    border: 2px solid;
    width: 600px;
    margin: auto;

}

th,
td {
    padding: 20px;
    border: 1px solid yellow;
    padding-left: 20px;
    color: black;
}

.popform {
    border: 1px solid;
    margin: auto;
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(136, 125, 125);
    padding: 20px;
    z-index: 9999;
    

}
</style>