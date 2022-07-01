
import { createStore} from 'vuex'
//create new store instance

const store = createStore ({
    state: {

    },
    actions: {
        createAccount: ({ commit }, userInfos) => {
        commit;
        console.log(userInfos);
        }
    }

})

export default store;