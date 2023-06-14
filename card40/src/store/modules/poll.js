import axios from 'axios';

const state = {

    

    // Other authentication-related state
};
const getters = {
    
};


const actions = {

    async fetchUsers(context, payload) {

        
            // const response = await axios.post(`http://65.108.77.50:3031/add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`);
            const response = await axios.post(`http://65.108.77.50:3031/add_poll?title=${payload.title}%20polll&options=${payload.select}`);
        
            console.log("response", response);
            console.log("Poll list ", response.data);
    },

};
const mutations = {
    
};



export default {
    state,
    mutations,
    actions,
    getters,
};


