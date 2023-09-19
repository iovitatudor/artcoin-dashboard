import Vuex from 'vuex';

import config from '@/store/config';
import users from "@/store/users";
import specialists from "@/store/specialists";

export default new Vuex.Store({
    modules: {
        config,
        users,
        specialists,
    },
});
