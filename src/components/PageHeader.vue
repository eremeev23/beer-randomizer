<template>
  <div class="hello">
    <v-app-bar
        app
        color="dark"
        dark
    >
      <v-container>
        <nav class="header__nav">
          <router-link to="/" class="header__nav-link">
            Account
          </router-link>
          <router-link to="contacts" class="header__nav-link">
            Contacts
          </router-link>
        </nav>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
}
</script>

<style scoped lang="scss">
.header__nav-link {
  text-decoration: none;
  color: #d7d7d7;
  transition: color .2s ease-in-out;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    color: #fff;
  }
}
</style>
