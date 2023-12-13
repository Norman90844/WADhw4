<template>
  <div class="section">
    <nav>
      <router-link to="/">Home</router-link> |
      <!--     <router-link to="/signup">SignUp</router-link> | -->
      <!--     <router-link to="/login">LogIn</router-link> | -->
      <router-link to="/contacts">Contacts</router-link>
    </nav>
    <router-view />
  </div>

  <div class="footer">
    <div>
      Footer
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  display: flex;
  height: 50px;
  background-color: grey;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.section {
  min-height: 93.9vh;
}
</style>
<script setup>
</script>