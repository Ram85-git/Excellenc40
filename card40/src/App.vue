<template>
  
 <div class="home">
     <nav>
      <div class="navigation">
        <div id="HA">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">About</router-link>
        </div> 
        </div>
      <img>
    </nav>
  
</div>

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
.home{
  display: flex;
}

nav {
  /* padding: 30px; */
  
  flex-direction: row;
  /* border: 1px solid green; */
}
.navigation{
  /* flex-direction: initial; */
  /* border: 1px solid; */
  width: 1400px;
  padding: 20px;
  background-image: linear-gradient(rgb(57, 197, 202), rgb(216, 230, 207));
  
}
#HA{
  flex-direction: initial;
  /* border: 1px solid; */
  width: 200px;
  font-size: 20px;


}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left:20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
