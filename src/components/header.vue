<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid"></div>
      <a class="navbar-brand" href="#">
          <img src="https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910_1280.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          CalculatorBlack
        </a>
      <RouterLink to="/">Calculator</RouterLink>
      <RouterLink to="/divisas">Divisas</RouterLink>
      <RouterLink to="/tiempo">Tiempo</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}

img{
  width:20px;
}
</style>
