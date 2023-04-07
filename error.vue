<template>
  <div class="center">
    <p>{{error.statusCode}}</p>
    <p>Oops</p>
    <p>{{error.message}}</p>
    <button @click="handleError">Go home...</button>
  </div>
</template>
<style scoped>
.center{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:24px;
  height: 100vh;
  background: red;
}
.center *{
  color:white;
  font-size: 32px;
}
.center button{
  background: blue;
  padding: 12px;
  border-radius: 12px;
}
</style>
<script setup>
defineProps(['error'])

const handleError = () =>clearError({redirect : '/'})
</script>
