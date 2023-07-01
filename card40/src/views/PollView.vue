<template>
    <div class="mainPoll">
        <div class="fffff">
            <br>
            <v-btn color="blue" class="btbt" type="button" @click="openDialog">
                Add Poll
            </v-btn>

        </div>
        <v-btn class="logout" type="button" @click="logOut()">
            Log Out
        </v-btn>

        <h1>All Polls</h1>
        <v-dialog v-model="dialogVisible2" class="dig">
            <v-card class="card">
                <v-card-title>
                    <span class="headline">Add New Poll</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="formDialog">
                        <v-text-field v-model="dialogTitle" label="Title" required></v-text-field>
                        <!-- <v-select v-model="dialogSelect" :items="items" label="Option" required></v-select> -->
                        <v-text-field v-model="dialogSelect" label="Add option" hide-details="auto"></v-text-field>
                        <i class="fa-solid fa-plus" v-on:click.prevent="addOptions2"></i>
                        <div>{{ options }}</div>
                    </v-form>
                </v-card-text>
                <v-card-actions>

                    <v-btn type="button" color="blue" text v-on:click.prevent="addPollFromDialog();
                    submit2();">Add New Poll</v-btn>

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
                        Delete Poll
                    </th>
                    <th class="text-left">
                        Edit Title
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="option in tableData" :key="option._id">
                    <td>{{ option.title }}</td>
                    <!-- <td>{{ option.select }}</td> -->
                    <td>
                        <div v-for="(item, index) in option.options" :key="index">
                            {{ item.option }} {{ item._id }}
                          
                            <i class="fa-solid fa-trash" id="DeleteOptions" v-on:click.prevent="deleteOption(option._id, item.option)"></i>

                        </div>
                        <i class="fa-sharp fa-solid fa-plus" id="add"
                            v-on:click.prevent="AddOptions(option._id, option.options)"></i>
                    </td>
                    <td><i class="fa-solid fa-trash" v-on:click.prevent="deleteusers(option._id)"></i></td>
                    <td><i class="fa-regular fa-pen-to-square" v-on:click.prevent="editItem(option._id, option.title)"></i>
                    </td>

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
                    </v-form>
                </v-card-text>
                <v-card-actions>

                    <v-btn type="button" label="Title" color="blue" text v-on:click.prevent="submit();">Submit</v-btn>
                    <!-- <v-btn type="button"  label="Option"  color="blue" text v-on:click.prevent="addDeta(option);">Add Option</v-btn> -->
                    <!-- <v-btn color="blue" text @click="EditPoll">Edit Poll</v-btn> -->
                    <!-- <v-btn color="blue" text @click="DeletePoll">Delete Poll</v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogVisible1" class="dig">
            <v-card class="card">
                <v-card-title>
                    <span class="headline">App options</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="formDialog">

                        <v-text-field v-model="option" label="Add option" hide-details="auto"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>

                    <v-btn type="button" label="Title" color="blue" text v-on:click.prevent="AddOpt();">Submit</v-btn>
                    
                </v-card-actions>
            </v-card>
        </v-dialog>



    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import router from '@/router';
import axios from 'axios';
export default {
    name: `PollView`,
    watch: {
        tableData: {
            deep: true,
            handler() {
                this.updateData();
            }
        }
    },
    data() {
        return {
            // title: '',
            options: [],
            tableData: [],
            showForm: false,
            dialogVisible: false,
            dialogVisible1: false,
            submittedTitle: '',
            id1: "",
            // text: '',
            // id2: '',
            option: '',
            text: '',
            title: "",
            select: "",
            // items: [

            // ],
            dialogVisible2: false,

            dialogTitle: "",
            dialogSelect: "",
            // tableData: [],



        };
    },

    mounted() {
        this.fetchData();
    },
    // onUpdated() {


    // },


    methods: {
        addOptions2() {
            // console.log(this.addOption)
            this.options.push(this.dialogSelect);
            console.log(this.options)
            this.dialogSelect = "";
        },

        logOut() {
            localStorage.removeItem("user");
            router.push('/')

        },
        openDialog() {
            this.dialogVisible2 = true;
        },

        addPollFromDialog() {
            // this.$router.push('/mainview');
            // this.$router.push('/pollview')
            this.addPoll({
                title: this.dialogTitle,
                select: this.options
            })
            this.dialogVisible2 = false;
        },
        submit2: function () {
            console.log("Value added", this.dialogTitle, this.dialogSelect);
            this.tableData.push({
                'title': this.dialogTitle,
                'select': this.dialogSelect

            })
            this.dialogTitle = '';
            this.dialogSelect = '';
        },

        updateData() {
            this.fetchData();

        },

        editItem(id, title) {
            this.id1 = id;

            this.title = title;

            this.dialogVisible = true;
        },
        AddOptions(id, option) {
            this.id1 = id;
            this.option = option;
            this.dialogVisible1 = true;

        },
        // ...mapActions(['deleteusers', 'editusers', 'editPoll' ]),
        ...mapActions(['deleteusers', 'editPoll', 'addNewOption', 'deleteOptions', 'addPoll', 'fetchData']),

        async fetchData() {
            try {
                const response = await axios.get('http://65.108.77.50:3031/list_polls');
                // console.log('42 called ', response, response.data);
                // console.log("42 called", response.data);
                this.tableData = response.data.data;
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
            let editid = {
                id: this.id1,
                title: this.title,
     
            }
            this.editPoll(editid);

            // this.title = this.submittedTitle;
            this.dialogVisible = false;

        },

        AddOpt() {
            console.log(this.option);

            let optionid = {
                id: this.id1,
                option: this.option  // text:this.text
            }
            console.log("option data", optionid);
            this.dialogVisible1 = false;
            this.addNewOption(optionid);
        },

        deletePoll(pollid) {
            // console.log(pollid)
            this.deleteusers(pollid);
        },

        deleteOption(id, text) {

            this.id1 = id;
            this.text = text;
            let deleteid = {
                id: this.id1,
                text: this.text,
            }
            //  console.log(optid)
            this.deleteOptions(deleteid);
        }
    },
    computed: mapGetters(["allPolls"]),
};
</script>

<style scoped>
#DeleteOptions{
    margin-left: 30px;
}
.logout {
    border: 1px solid;
    margin-left: 800px;
    margin-top: -64px;
}

.mainPoll {
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

#add {
    height: 30px;
    width: 20px;
    background-color: green;
    margin-left: 150px;
}

/* 
#flexit{
    display: flex;
} */

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