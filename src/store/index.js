import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLists: {
        users: [],
        page: 1,
        total: 1,
        totalPages: 1,
        perPage: 1,
    },
    userId: null
  },
  getters: {
    userLists(state) {
      return state.userLists;
    },
    userId(state){
      return state.userId;
    },
    User(state){
      return state.userLists.users.find(x => x.id === state.userId)
    }
  },
  mutations: {
    list(state, payload) {
      state.list = payload;
    },
    userLists(state, payload) {
      let getValue = JSON.parse(localStorage.getItem('like'))
      payload.data.forEach((element, index) => {
        state.userLists.users.push(element)
        state.userLists.users.forEach(user => {
          if(getValue){
            Array.from(getValue).forEach(element => {
              if(element == user.id){
                user.like = true;
              }
            })
          }else{
            user.like = false;
          }
        })
      });
      state.userLists.page = payload.page
      state.userLists.perPage = payload.per_page
      state.userLists.total = payload.total
      state.userLists.totalPages = payload.total_pages
    },
    userListsResset(state, payload) {
      state.userLists = {
        users: [],
        page: 1,
        total: 1,
        totalPages: 1,
        perPage: 1,
      };
    },
    userId(state, payload){
      state.userId = payload;
    },
    likeUser(state, payload){
     
      let index = state.userLists.users.findIndex(x => x.id === payload);
      let newValue = !state.userLists.users[index].like
      Vue.set(state.userLists.users[index], 'like', newValue);

      if(newValue){
        console.log(true)
        if(!JSON.parse(localStorage.getItem('like'))){
          localStorage.setItem("like", JSON.stringify(payload));
        }else{
          let getValue = localStorage.getItem('like');
          let newValue = JSON.parse(getValue).toString() + payload
          localStorage.setItem("like", JSON.stringify(newValue));
        }
      }else{
        console.log(false)
        console.log(JSON.parse(localStorage.getItem('like')));
        if(JSON.parse(localStorage.getItem('like')) !== null){
          let getValue = localStorage.getItem('like');
          let newValue = JSON.parse(getValue).toString().replace(payload,'');
          localStorage.setItem("like", JSON.stringify(newValue));
        }
      }
    },
  },
  actions: {
    getUserList(context, payload) {
      return axios.get('https://reqres.in/api/users?page='+payload).then(response => {
          context.commit('userLists', response.data);
          return response
      }).catch(error => {
          console.log(error.response)
          return error
      })
    },
  },
  modules: {
  }
})
