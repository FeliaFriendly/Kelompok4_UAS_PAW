<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Sosmed Vue</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <template v-if="isLoggedIn">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/create">Create New Post!</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/video">Short Video</router-link>
            </li>
        </template>
      </ul>
      <ul class="navbar-nav">
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">{{user.name}}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
  import {mapGetters} from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
    methods: {
        logout: function() {
            this.$store.dispatch("logout").then(() => {
            this.$router.push("/login");
            });
        }
    }
  }
</script>
