import axios from 'axios';
// import router from '../../router'

const state = {

    user1: [],
    
};
const getters = {
    allUsers: state => state.user1
};


const actions = {

    async getUsers ({commit}){

        const result= await axios.get('http://65.108.77.50:3031/list_users')
        console.log("Userdetails", result);
        commit("setusers", result.data);
        console.log("Userdetails", result.data);
    },

    async adduser1(context, payload) {
            const response = await axios.post(`http://65.108.77.50:3031/add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`);
            console.log("response", response);
            console.log("User added ", response.data);
    },

    async loginDetails({commit}, loginCredential) {
        console.log(`http://65.108.77.50:3031/login?username=${loginCredential.username}&password=${loginCredential.password}`);
      const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginCredential.username}&password=${loginCredential.password}`);
        commit("Set_login_status", res.data);
        console.log("Data login success  ", res.data.token);
        // router.push({path: '/pollview'})
        // localStorage.setItem("userStatus", res.data);
        localStorage.setItem("status", res.data.token);
        // if(loginCredential.username=="admin" && loginCredential.password=="admin"){

        //     router.push({path: '/pollview'});
        // }
        // else {
        //     router.push('/components/User')
        // }
    },
    


};

const mutations = {
    Set_login_status: (state,user1) =>(state.user1 = user1),
    setusers: (state,user1) =>(state.user1 = user1)
    
};



export default {
    state,
    mutations,
    actions,
    getters,
};


