<template>
<v-content>

  <div class="image">
<v-img  src="@/assets/background.jpg"
 max-height="800"
	max-width="1915"

></v-img>
  </div>
<h1 class = "first line"> Hello,I am Ahmed Naji. </h1>
<h1 class = "secondline"> I am a Computer Science Student </h1>
<h1 class = "thirdline"> Welcome to my portfolio</h1>   
</v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home", 

};
</script>


<style lang="scss" scoped>

.image { 
   position: relative; 
   width: 100%;
   height:100% ;
   
}

h1{
  margin-top: 200px;
  font-family:'Raleway', sans-serif;
  font-weight: 300;
  font-size: 32px;
  margin-left: 90px;
   position: absolute; 
   top: 200px; 
   left: 0; 
   width: 100%; 
}
.secondline{
  position: absolute; 
   top: 240px; 
   left: 0; 
   width: 100%; 
}
.thirdline{
  position: absolute; 
   top: 280px; 
   left: 0; 
   width: 100%; 

}
</style>
