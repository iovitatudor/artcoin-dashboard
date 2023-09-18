import {UsersApi} from "@/api/usersApi";

export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {
        getUsers: (state) => state.users,
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
    },
    actions: {
        async addUser({commit}, data, successCB, errorCB) {
            console.log(data);
            try {
                await UsersApi.create(data);
                const response = await UsersApi.getAll();
                commit('setUsers', response.data);
                successCB();
            } catch (e) {
                errorCB(e);
                console.error(e);
            }
        },
        async fetchUsers({commit}) {
            try {
                const response = await UsersApi.getAll();
                return commit('setUsers', response.data);
            } catch (e) {
                console.error(e);
            }
        },
        async removeUser({commit}, id) {
            try {
                await UsersApi.delete(id);
                const response = await UsersApi.getAll();
                return commit('setUsers', response.data);
            } catch (e) {
                console.error(e);
            }
        }
    }
}