<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

function goTo(url) {
  window.location.href = url;
}

</script>

<template>
  <header>

    <div class="wrapper">
      <h1>WELCOME TO HRMDO PORTAL</h1>
      <br>
<!-- 
      <div class="card flex justify-content-center">
       
      </div> -->
      <Button text label="IHRIS" class="mr-4" @click="goTo('https://ihris.hrmdo-lgubayawan.link')"/>
      <Button text label="PMS Online" @click="goTo('https://spms.hrmdo-lgubayawan.link')"/>
     
      <!-- <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>
