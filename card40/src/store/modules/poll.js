import axios from 'axios';

const state = {

    users: [],
    Polls: [],
    deleteuser: []

};
const getters = {
    allPolls: state => { state.Polls },
    alldelete: state => state.deleteuser


};


const actions = {
    async addPoll(context, payload) {
        try {
            let url = `http://65.108.77.50:3031/add_poll?title=${payload.title}&options=`;
            payload.select.forEach((el, index) => {
                console.log(el, index);
                if (index == 0) {
                    url = url + `${el}`
                }
                else {
                    url = url + `____${el}`
                }
            })

            const response = await axios.post(url);
            console.log("set_users", response);
        } catch (error) {
            console.error("Failed to add poll:", error);
        }
       
    },

    async deletePoll({ commit }, id) {
        const res = await axios.post(`http://65.108.77.50:3031/delete_poll?id=${id}`);
        // commit("Delete_data", res.data)
        commit("Delete_Poll", id);
        console.log("Delete_Poll ", res);
    },

    // const edit= await axios.post(`http://65.108.77.50:3031/update_poll_title?id=648b101b404fcc93fa650efb&title=${payload.title}`)
    async deleteusers({ commit }, pollid) {
        const deleuser = await axios.delete(`http://65.108.77.50:3031/delete_poll?id=${pollid}`);
        // console.log(deleuser)
        alert("Delete SuccessFull")
        commit("snythin", deleuser);
    },

    async deleteOptions({ commit }, deleteid) {

        const del = await axios.delete(`http://65.108.77.50:3031/delete_poll_option?id=${deleteid.id}&option_text=${deleteid.text}`);

        alert("Delete option success")
        commit("snythin1", del)


    },

    async addNewOption({ commit }, optionid) {
        console.log(optionid.id);
        const res = await axios.post(`http://65.108.77.50:3031/add_new_option?id=${optionid.id}&option_text=${optionid.option}`)
        alert("Edit Option successfull")
        commit("Set_Option", res.data);
        console.log("Edit option", res.data);
    },

    async editPoll({ commit }, editid) {
        console.log(editid.id);
        // const response = await axios(`http://65.108.77.50:3031/update_poll_title?id=648c0c59404fcc93fa6510a4&title=${editTitle.title}`)
        const response = await axios.put(`http://65.108.77.50:3031/update_poll_title?id=${editid.id}&title=${editid.title}`)
        alert("Edit Title Successfull")
        commit("setDetails", response.data);
        console.log("Edit Poll", response.data);
    },


};
const mutations = {
    setDetails: (state, users) => {
        console.log('Mutation calling:', users);
        (state.users = users)
    },
    Set_Option: (state, users) => {
        console.log('Editing  option:', users);
        (state.users = users)
    },
    snythin: (state, deleteuser) => {
        console.log("delete", deleteuser);
        (state.deleteuser = deleteuser)
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


