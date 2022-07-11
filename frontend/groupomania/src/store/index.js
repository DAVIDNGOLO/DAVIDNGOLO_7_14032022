
import { createStore} from 'vuex'


const axios = require('axios').default;
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth/'
  });
let user = localStorage.getItem('user');
if(!user){
  user = {
    userId: -1,
    token: '',
  }; 
} else {
  try{user = JSON.parse(user);
    axios.defaults.headers.common['Authorization'] = user.token;
  }catch (ex) {
    user = {
      userId: -1,
      token: '',
    }; 
  }
  
} 
//create new store instance
const store = createStore ({
    state: {
    status: '',
    user: {
      userId: -1,
      token: '',
    },
    userInfos: {
      pseudo:'',
      email:'',
      password:'',

      },
    },
    mutations: {
      setStatus: function (state, status){
       state.status = status;
      },
      logUser: function (state, user){
        axios.defaults.headers.common['Authorization'] = user.token;
        localStorage.setItem('user',JSON.stringify(user));
        state.user = user;
      },
      userInfos: function (state, userInfos){
        state.userInfos = userInfos;
      },
    },
    actions: {
      login: ({ commit }, userInfos) => {
        commit('setStatus', 'loading');
        return new Promise((resolve, reject) => {
          
          instance.post('/login', userInfos)
            .then(function (response) {
              commit('setStatus', '');
              commit('logUser', response.data);
              resolve(response);
            })
            .catch(function (error) {
              commit('setStatus', 'error_login');
              reject(error);
            });
        });
      
      },
        createAccount: ({ commit }, userInfos) => {
          return new Promise((resolve, reject) => {
            commit;
            instance.post('/signup', userInfos)
              .then(function (response) {
                commit('setStatus', 'created');
                resolve(response);
              })
              .catch(function (error) {
                commit('setStatus', 'error_create');
                reject(error);
              });
          });       
        },
        getUserInfos : ({commit}) =>{
          instance.get('/infos/:id')
              .then(function (response) {
                commit('userInfos', response.data);
               
              })
              .catch(function () {
              
              });
        }
       
    }

})

export default store;



