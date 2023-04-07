<template>

  <div>
    <header class="shadow-sm bg-white">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/products/shhshs">Products abbs</NuxtLink></li>
      </ul>
    </header>
   <div>
     <slot/>
   </div>
  </div>
</template>
<script>

</script>
<style scoped>
h2{
  color:red;
}
p{
  text-align: center;
}
</style>
