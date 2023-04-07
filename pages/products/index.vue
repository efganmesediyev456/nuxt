<template>
  <div>
    <p>hellooooooo</p>
    <h2>efgan</h2>
    <div v-for="v in products">
      <p>{{v.title}}</p>

      <ProductCard :product="v"></ProductCard>
    </div>
  </div>
</template>
<script setup>

definePageMeta({
  layout:'products'
})

const {data : products} = await useFetch('https://fakestoreapi.com/products')




</script>
<style scoped>
h2{
  color:red;
}
p{
  text-align: center;
}
</style>
