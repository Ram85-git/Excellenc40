import axios from 'axios';

const state = {

    user1: []

    // Other authentication-related state
};
const getters = {
    // allUsers: state => state.user1
};


const actions = {
    async adduser1(context, payload) {

        
            const response = await axios.post(`http://65.108.77.50:3031/add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`);
            console.log("response", response);
            console.log("User added ", response.data);
    },


    async loginDetails({commit}, loginCredential) {

        const response = await axios.post(`http://65.108.77.50:3031/login?username=${loginCredential.username}&password=${loginCredential.password}`);
        commit("newStudent", response.data);
        console.log("Data login success  ", response.data);
        this.$router.push('/mainview')
    }


};
const mutations = {
    
};



export default {
    state,
    mutations,
    actions,
    getters,
};


