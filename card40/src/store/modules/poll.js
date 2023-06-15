import axios from 'axios';

const state = {

};
const getters = {
    
};


const actions = {

    async addPoll(context, payload) {
            const data = await axios.post(`http://65.108.77.50:3031/add_poll?title=${payload.title}%20polll&options=${payload.select}`);
            console.log("Poll list ", data);

    },
//     async deletePoll(context, DeleteUsers) {
//         const res = await axios.post(`http://65.108.77.50:3031/delete_poll?id=577212fdd1bba33c17b5b64e`);
//         console.log("Delete Poll ", res);
// },


};
const mutations = {

    
};



export default {
    state,
    mutations,
    actions,
    getters,
};


