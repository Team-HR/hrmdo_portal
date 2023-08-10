<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <h1>WELCOME TO HRMDO PORTAL</h1>
      <br>
      <a href="/ihris" style="margin: 15px; padding: 15px;">Go to IHRIS</a>

      <a href="/pcr" style="margin: 15px; padding: 15px;">Go to PCR-Online</a>
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>
