<template>
  <div class="card">

    <img :src="product.image" alt="">
    <NuxtLink :to="`/products/${product.id}`">{{product.title}}</NuxtLink>

  </div>
</template>
<style  scoped>

.card{
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
<script setup>
const {product}=defineProps(['product'])
</script>
