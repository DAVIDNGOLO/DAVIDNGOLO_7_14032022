
import { createStore} from 'vuex'

const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth/'
  });
  
//create new store instance
const store = createStore ({
    state: {

    },
    actions: {
        createAccount: ({ commit }, userInfos) => {
        commit;
        instance.post('/createAccount', userInfos)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }

})

export default store;



