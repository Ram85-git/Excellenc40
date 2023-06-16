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
                   <td><i class="fa-regular fa-pen-to-square" v-on:click.prevent="editItem()"></i></td>

                </tr>
            </tbody>
        </v-table>
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
        };
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        ...mapActions([ 'deleteusers', 'editusers']),
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
        saveForm() {

            this.showForm = false;
        },
        cancelForm() {

            this.showForm = false;
        },
        
        deletePoll(pollid) {
            // console.log(pollid)
            this.deleteusers(pollid);
        },
    }
};
</script>

<style scoped>
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
.popform{
    border: 1px solid;
  margin: auto;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(136, 125, 125);
  padding: 20px;
  z-index: 9999;;
    
}
</style>