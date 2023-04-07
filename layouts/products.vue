<template>

  <div>

    <div>
      <slot/>
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
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
