<template>
  <nav>
    <h1>Daftar Menu</h1>
    <br>
    <router-link to="/">Makanan</router-link>
    <br>
    <router-link to="/minuman">Minuman</router-link>
    <br>
    <router-link to="/snack">Snack</router-link>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button>Checkout</button>
  </nav>
  <router-view/>
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
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #ff6f68;
  color: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img{
  width: 150px;
  height: 150px;
  border: solid;
  padding: 10px;
  margin: 5px;
}

button{
  background-color: yellow;
  padding: 10px
}

span{
  margin: 50px;
}
</style>