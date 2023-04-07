<template>
  <div>
    <p>about</p>
    <h2>efgan</h2>
    <p>{{data}}</p>
  </div>
</template>
<script setup>
const {data}=await useFetch('/api/currency/AZN');

</script>
<style scoped>
h2{
  color:red;
}
p{
  text-align: center;
}
</style>
