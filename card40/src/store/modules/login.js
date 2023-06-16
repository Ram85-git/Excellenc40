import axios from 'axios';

const state = {

    user1: [],
   
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

        const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginCredential.username}&password=${loginCredential.password}`);
        commit("Set_login_status", res.data);
        console.log("Data login success  ", res.data);
        // this.$router.push('/mainview')
    },
    


};

const mutations = {
    Set_login_status: (state,user1) =>(state.user1 = user1)
    
};



export default {
    state,
    mutations,
    actions,
    getters,
};


