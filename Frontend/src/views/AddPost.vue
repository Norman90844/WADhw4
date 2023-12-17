<template>
  <div class="form">
    <h3>Add Post</h3>
    <label for="body">Body</label>
    <input type="text" name="body" placeholder="body" required v-model="body">
    <div class="container">
      <button @click="AddPost" class="center">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  methods: {
    AddPost() {
      var data = {
        body: this.body,
        date: `${new Date()}`.split(' ').slice(1,4).join(' ')
      };
      if (data.body !== "") {
        console.log(data.body)
        fetch("http://localhost:3000/auth/addpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((response) => response.json())
            .catch((e) => {
              console.log(e);
              console.log("error");
            });
        location.assign("/");
      }
    }
  },
}
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: black;
}
.form-group {
  display: flex; /* Add this line */
  flex-direction: column; /* You can change this to 'row' if you want them side by side */
  margin-bottom: 15px;
}
label {
  color: black;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 15px;
  display: inline-block;
}
input {
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: black;
  border-radius: 10px;
  margin-bottom: 10px;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.center {
  border: 0;
}
::placeholder {
  text-align: center;
}
</style>
