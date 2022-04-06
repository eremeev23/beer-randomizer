<template>
  <v-app>
    <Header />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/PageHeader.vue"
import {mapActions} from "vuex";

export default {
  name: 'App',

  data: () => ({

  }),

  components: {
    Header
  },

  methods: {
    ...mapActions(['beerRequest', 'userRequest'])
  },

  created() {
    this.beerRequest();
    this.userRequest();
  }
};
</script>

<style lang="scss">
#app {
  background-color: #1b1d25;
  color: #f1f1f1;

  @media screen and (max-width: 1000px) {
    padding: 10px 24px
  }
}
</style>
