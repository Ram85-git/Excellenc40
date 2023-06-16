import axios from 'axios';

const state = {

    users: [],
    Polls: [],
    deleteuser:[]

};
const getters = {
    allPolls: state => { state.Polls },
    alldelete: state=>state.deleteuser


};


const actions = {

    async addPoll(context, payload) {
        const data = await axios.post(`http://65.108.77.50:3031/add_poll?title=${payload.title}%20polll&options=${payload.select}`);
        console.log("Poll list ", data);

    },
    // async deletePoll({ commit }, id) {
    //     const res = await axios.post(`http://65.108.77.50:3031/delete_poll?id=${id}`);
    //     // commit("Delete_data", res.data)
    //     commit("Delete_Poll", id);
    //     console.log("Delete_Poll ", res);
    // },

    // const edit= await axios.post(`http://65.108.77.50:3031/update_poll_title?id=648b101b404fcc93fa650efb&title=${payload.title}`)
    async deleteusers({ commit }, pollid) {
        const deleuser = await axios.delete(`http://65.108.77.50:3031/delete_poll?id=${pollid}`)
        // console.log(deleuser)
        alert("Delete SuccessFull")
        commit("snythin", deleuser);
    },


    async editPoll({ commit }, editTitle) {
        const response = await axios(`http://65.108.77.50:3031/update_poll_title?id=648c0c59404fcc93fa6510a4&title=${editTitle.title}`)
        commit("setDetails", response.data);
        console.log("Edit Poll", response.data)
    },


};
const mutations = {
    setDetails: (state, users) => {
        console.log('Mutation calling:', users);
        (state.users = users)
    },
    snythin: (state,deleteuser)=>{
        console.log("delete",deleteuser);
        (state.deleteuser=deleteuser)
    }

    // Delete_Poll: (state, id) => {
    //     state.Polls = state.Polls.filter(polls => polls.id !== id);
    // }



};



export default {
    state,
    mutations,
    actions,
    getters,
};


