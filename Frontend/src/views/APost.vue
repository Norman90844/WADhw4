<template>
  <div class="APost">
    <div id="form">
      <h3>A Post</h3>
      <label for="body">Body </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <div class="container">
        <button @click="updatePost" class="updatePost">Update</button>
        <button @click="deletePost" class="deletePost">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        body: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/auth/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/auth/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      fetch(`http://localhost:3000/auth/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
#form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(189, 212, 199);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: black;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: black;
  border-radius: 10px;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.updatePost {
  margin-right: 30px;
}
</style>