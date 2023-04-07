<template>
  <div class="card">

    <img :src="product.image" alt="">
    <p>{{product.title}}</p>
    <p>{{product.description}}</p>
    <p>{{product.price}}</p>

  </div>
</template>
<style  scoped>



</style>
<script setup>
const {product}=defineProps(['product'])
</script>
