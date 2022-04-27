<template>
  <v-card
    max-width="1200"
    class="mx-auto mt-10"
  >
   
   <div class="d-flex">
       <div>
           <v-img
            :src='this.User.avatar'
            height="300px"
            width="300px"
            dark
            >
            </v-img>
       </div>
        
        <div class="flex-grow-1">
            <div class="d-flex justify-center mt-10">
                <h2>{{this.User.first_name + " " + this.User.last_name}}</h2>
            </div>
            <div class="d-flex justify-center mt-6">
                <h2>{{this.User.email}}</h2>
            </div>
            <div class="d-flex justify-center mt-10">
                <v-btn
                elevation="2"
                text
                @click="GoBack()"
                >Wróć do Listy</v-btn>
            </div>
        </div>
   </div>

  </v-card>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        
      }
    },
    methods:{
        GoBack(){
            this.$router.push({ name: 'home'})
        }
    },
    computed:{
            User: {
        get() {
          return this.$store.getters["User"];
        }
      },
            userLists: {
        get() {
          return this.$store.getters["userLists"];
        },
        set(value) {
          this.$store.commit("userLists", value);
        },
      },
    }
  }
</script>

