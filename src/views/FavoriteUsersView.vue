<template>
  <div class="home pa-6">
    <v-card
    max-width="1200"
    class="mx-auto"
    >
      <v-card-title>Lista Użytkowników</v-card-title>
      <v-list >
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    data () {
      return {
        items: [
          { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
      }
    },
    computed: {
      ...mapState(['likedUserLists'])
    },
  }
</script>
