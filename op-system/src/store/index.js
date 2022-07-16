import Vuex from "vuex";
import VueAxios from 'vue-axios';
import axios from 'axios';

export default new Vuex.Store({
    state: {
        nifistate: []
    },
    actions: {
        loadNifiState({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
                commit('SET_STATE', result.data);
            }).catch(error => {
                throw new Error('API ${error}');
            });
        }
    },
    mutations: {
        SET_STATE(state, nifistate) {
            state.nifistate = nifistate;
        }
    }
})

