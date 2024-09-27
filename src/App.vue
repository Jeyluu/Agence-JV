
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <div class="wrapper">
      
      <h1>L'agence J&V</h1>
      <p>L'agence J&V</p>

      <nav className="nav-test">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sandbox">SandBox</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

