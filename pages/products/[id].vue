<template>
  <div>
    <Head>
      <Title>Bura Haqqinda {{product.title}}</Title>
    </Head>
    <ProductDetail :product="product"></ProductDetail>
  </div>
</template>
<script setup>
import ProductDetail from "~/components/ProductDetail.vue";

const { id }=useRoute().params

const {data : product} = await useFetch('https://fakestoreapi.com/products/'+id,{key:id})

if(!product.value){
  throw createError({statusCode:404, statusMessage:'Product tapilmadi', fatal:true})
}

definePageMeta({
  layout:'products'
})
</script>
<style scoped>
.card{
  width: 200px;
}
</style>
