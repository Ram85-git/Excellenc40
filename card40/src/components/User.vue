<template>
    <div class="mainPoll">
        <h1>All Polls</h1>
        <v-btn class="logout" type="button" @click="logOut()">
            Log Out
        </v-btn>
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
                        Vote
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


                        </div>
                    </td>
                    <td><i class="fa-solid fa-check-to-slot"></i></td>

                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import { mapActions, } from 'vuex';
import axios from 'axios';
import router from '@/router';
export default {
    name: `User`,
    data() {
        return {
            options: [],
            tableData: [],
            title: "",
            select: "",


        }

    },
    mounted() {
        this.fetchData();
    },
    methods: {
        logOut() {
            localStorage.removeItem('status');
            router.push('/')

        },


        ...mapActions(['fetchData']),

        async fetchData() {
            try {
                const response = await axios.get('http://65.108.77.50:3031/list_polls');
                this.tableData = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },

    }

}



</script>


<style scoped>
.mainPoll {
    background-image: url('https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/62ee03241cef28eaca144d50_Rectangle%201%20(40).svg');
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 1400px;
    margin: auto;
    height: 800px;
}

.logout {
    border: 1px solid;
    margin-left: 800px;
    margin-top: -64px;

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
</style>