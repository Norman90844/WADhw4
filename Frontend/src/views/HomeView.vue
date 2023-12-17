<template>
  <div class="header">
    <div class="flexsection">
      <div class="sidebar">
      </div>
      <div class="posts">
        <div class="container">
          <button v-if="authResult" @click="Logout" class="center">Logout</button>
        </div>
        <div class="post-list" v-for="post in posts" :key="post.id">
          <router-link :to="'/posts/' + post.id" class="post">
            <h3>{{ post.date }}</h3>
            <p class="post-body">{{ post.body }}</p>
          </router-link>
        </div>
      </div>
      <div class="sidebar">
      </div>
    </div>
    <div class="twoButtons">
      <div class="buttonsContainer">
        <button v-if="authResult" @click="Addpost" class="center">Add post</button>
        <button v-if="authResult" @click="DeleteAll" class="center">Delete all</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    Addpost() {
      this.$router.push("/addpost")
    },
    DeleteAll() {
      try {
       fetch('http://localhost:3000/auth/deleteall', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('All data deleted successfully');
        location.assign("/");
      } catch (error) {
        console.error('Error deleting data:', error.message);
      }
    }
  },
  mounted() {
        //fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('http://localhost:3000/auth/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

<style scoped>
body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}
.post-list{
  background: rgb(189, 212, 199);
  margin-bottom: 10px;
  padding: 3px 5px;
  border-radius: 10px;
  margin-right: 5%;
  margin-left: 5%;
}
.post-body {
  color: #333;
  font-size: 1rem;
  word-wrap: break-word;
}
h3{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
  text-align: right;
}

h1, h2, h3, h4, ul, li, a, input, label, button, div, footer{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
}
input{
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
}
label{
  display: block;
  margin: 20px 0 10px;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
nav{
  display: flex;
  align-items: center;
}
.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    text-align: left;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%;
}
.container {
  display: flex;
  justify-content: center;
}

.flexsection{
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

div.sidebar{
  width: 20%;
  background-color: rgba(64, 145, 86, 0.5);
  border-radius: 25px;
  min-height: 80vh;
}

.twoButtons {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

.buttonsContainer {
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

@media (max-width: 800px) {
  .sidebar {
    display: none;
  }

  div.posts {
    width: 85%;
  }

  .buttonsContainer {
    width: 90%;
    gap: 5%;
  }

  .center {
    width: 60%;
  }
}

.posts {
  width: 70%;
}
</style>