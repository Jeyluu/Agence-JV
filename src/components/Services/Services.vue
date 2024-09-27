<script setup lang="ts">
import './service.css'
defineProps<{
  surTitle:string
  title: string,
  description: string
}>()
</script>

<template>
  <section class="container">
  <div class="card">
    <div class="content">
    <p class="logo">{{ surTitle }}</p>
      <div class="h6">{{ title }}</div>
      <div class="hover_content">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>       
</section>
</template>


