<template>
  <div class="home pa-6">
    <v-card
    max-width="1200"
    class="mx-auto"
    >


      <v-card
      class="d-flex justify-space-between pl-4 pt-2"
      flat
      >
        <h1 class="mt-2">Lista Użytkowników</h1>
        <v-col 
        cols="12"
        md="4">
         <div class="d-flex justify-center">
          <v-text-field
            v-model="search"
            solo
            background-color="#E4E4E4"
            flat
          ></v-text-field>
          <div class="mt-2 pl-1" @click="searchUser()"> 
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
         </div>
        </v-col>
      </v-card>
      
      <v-list flat v-if="!search">
        <v-list-item-group
        >
       
        <v-list-item
          v-for="user in userLists.users"
          :key="user.id"
        >
          <v-list-item-icon @click="likeUser(user.id)">
            <v-btn
              icon
              :color="user.like ? 'pink' : 'gray'"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            
          </v-list-item-icon>

          <v-list-item-content
           @click="UserDetails(user.id)">
            <v-hover>
              <v-list-item-title v-text="user.first_name + ' ' + user.last_name"></v-list-item-title>
            </v-hover>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="user.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-list flat v-if="search">
        <v-list-item-group
        >
       
        <v-list-item
          v-for="(user, index) in searchdUsers"
          :key="index"
        >
          <v-list-item-icon @click="user.like = !user.like">
            <v-btn
              icon
              color="pink"
              
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            
          </v-list-item-icon>

          <v-list-item-content
           @click="UserDetails(user.id)">
            <v-hover>
              <v-list-item-title v-text="user.first_name + ' ' + user.last_name"></v-list-item-title>
            </v-hover>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="user.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        </v-list-item-group>
      </v-list>

      <div v-if="search && !searchdUsers[0]">
        <h2 class="pl-10 pb-10">Nie znaleziono takiego użytkownika</h2>
      </div>

      <div class="text-center pb-2" v-if="!search">
        <v-pagination
          v-model="page"
          :length='userLists.totalPages'
        ></v-pagination>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    name: 'Home',
    data () {
      return {
        search: "",
        page: 1,
        searchdUsers: []
      }
    },
    mounted: function () {
      this.loadPage()
    },
    methods: {
      color(value) {
        if(value){
          return 'pink'
        }else{
          return 'grey'
        }
      },
      searchUser(){
        let result = [];
        this.userLists.users.forEach((element, index) => {
          if(element.first_name.includes(this.search)){
            result.push(element)
          }
        });

        this.searchdUsers = result;

      },
      UserDetails(id){
        this.$store.commit("userId", id)
        this.$router.push({ name: 'User'})
      },
      submit(page){   
        this.$store.dispatch("getUserList", page).then(response => {
        }).catch(error => {
            console.log(error);
        });
      },
      loadPage(){
        this.$store.commit("userListsResset")
        this.submit(this.page);
      },
      likeUser(index){
        this.$store.commit("likeUser", index);
      }
    },
    computed: {
      ...mapState(['userLists'])
    },
    watch: {
      userLists: {
         handler: function(newValue) {
                console.log(newValue)
            },
            deep: true
      },
      page: {
        handler(newValue, oldValue) {
            if(newValue !== oldValue){
                this.loadPage()
            }
        },
      },
      search: {
        handler(newValue, oldValue) {
            if(newValue !== oldValue){
                this.searchUser()
            }
        },
      }
    },
  }
</script>

