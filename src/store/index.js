import Vuex from 'vuex';

import config from '@/store/config';
import users from "@/store/users";
import sellers from "@/store/sellers";
import organizations from "@/store/organizations";
import taskTypes from "@/store/taskTypes";

export default new Vuex.Store({
    modules: {
        config,
        users,
        sellers,
        organizations,
        taskTypes,
    },
});
